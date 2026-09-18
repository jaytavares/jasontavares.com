import { expect, test } from "@playwright/test";

test("page reflows without horizontal scrolling", async ({ page }) => {
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);

    const dimensions = await page.evaluate(() => ({
      content: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  }
});

test("work navigation is keyboard-operable", async ({ page }) => {
  await page.goto("/");
  const workLink = page.locator('.hero a[href="#work"]');
  await expect(workLink).toBeVisible();
  await workLink.focus();
  await expect(workLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
});

test("contact and project links have accessible names and valid destinations", async ({ page }) => {
  await page.goto("/");
  const emailLink = page.locator('.contact a[href^="mailto:"]');
  await expect(emailLink).toBeVisible();
  await expect(emailLink).toHaveAccessibleName(/\S/);
  const email = new URL((await emailLink.getAttribute("href"))!);
  expect(email.protocol).toBe("mailto:");
  expect(email.pathname).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const externalLinks = page.locator(
    '.electronics-list a, .contact a[href^="https:"]',
  );
  expect(await externalLinks.count()).toBeGreaterThan(0);
  for (const link of await externalLinks.all()) {
    await expect(link).toHaveAccessibleName(/\S/);
    const destination = new URL((await link.getAttribute("href"))!);
    expect(destination.protocol).toBe("https:");
    expect(destination.hostname).not.toBe("");
    if ((await link.getAttribute("target")) === "_blank") {
      await expect(link).toHaveAttribute("rel", /noreferrer|noopener/);
    }
  }
});

test("historical comparison refreshes with pointer and keyboard input", async ({ page }) => {
  await page.goto("/");
  const trigger = page.locator(".benchmark-trigger");
  const value = page.locator(".benchmark-value");
  await expect(trigger).toBeEnabled();
  await expect(trigger).toHaveAttribute("aria-busy", "false");
  await expect(trigger).toHaveAccessibleName(/\S/);
  await expect(page.locator(".benchmark-year")).not.toBeEmpty();

  const initialValue = await value.innerText();
  await trigger.click();
  await expect.poll(() => value.innerText()).not.toBe(initialValue);
  await expect(trigger).toHaveAttribute("aria-busy", "false");

  const updatedValue = await value.innerText();
  await trigger.focus();
  await expect(trigger).toBeFocused();
  await page.keyboard.press("Enter");
  await expect.poll(() => value.innerText()).not.toBe(updatedValue);
  await expect(trigger).toHaveAttribute("aria-busy", "false");
});

test("about image loads and has an accessible description", async ({ page }) => {
  await page.goto("/");
  const image = page.locator(".about-me-photo img");
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("alt", /\S/);
  await expect.poll(() =>
    image.evaluate((element) => {
      const img = element as HTMLImageElement;
      return img.complete && img.naturalWidth > 0;
    }),
  ).toBe(true);
});
