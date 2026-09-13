import { expect, test } from "@playwright/test";

test("keeps the hero focused on the introduction without a decorative panel", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".hero > *")).toHaveCount(1);
  await expect(page.locator(".system-card")).toHaveCount(0);
  await expect(page.locator(".hero + .current-band")).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    pageWidth: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
    heroWidth: document.querySelector(".hero")!.getBoundingClientRect().width,
    copyWidth: document.querySelector(".hero-copy")!.getBoundingClientRect().width,
  }));
  expect(dimensions.pageWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
  expect(dimensions.copyWidth).toBeCloseTo(dimensions.heroWidth, 0);
});

test("presents Jay's profile and primary contact path", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Jay Tavares/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "systems that survive contact with reality",
  );
  await expect(
    page.getByText("TypeScript", { exact: true }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /send me an email/i }),
  ).toHaveAttribute("href", "mailto:workwith@jasontavares.com");
});

test("supports keyboard navigation to the work section", async ({ page }) => {
  await page.goto("/");
  const workLink = page.getByRole("link", { name: "Explore my work" });
  await workLink.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#work$/);
});

test("shows one reloadable historical benchmark", async ({ page }) => {
  await page.goto("/");

  const benchmarkTrigger = page.locator(".benchmark-trigger");
  await expect(benchmarkTrigger).toContainText("I live in a house older than");
  await expect(benchmarkTrigger).toHaveAttribute(
    "aria-label",
    /Show another comparison\. Current comparison:/,
  );
  await expect(page.locator(".benchmark-year")).toHaveText(/.+/);
  await expect(page.locator(".benchmark-year")).toHaveCSS("position", "static");
  await expect(page.getByText("A world taking shape")).toHaveCount(0);
});

test("includes Jay's family photo without changing the about copy", async ({ page }) => {
  await page.goto("/");

  const aboutMe = page.locator(".about-me-section");
  await expect(aboutMe.getByText("About Me", { exact: true })).toBeVisible();
  await expect(
    aboutMe.getByRole("img", {
      name: "Jay Tavares with his wife and daughter on a mountain hike",
    }),
  ).toBeVisible();
  await expect(aboutMe).toContainText(
    "I live on the West Side of Providence with my wife and daughter.",
  );
  await expect(aboutMe).toContainText("working away on my house");
  await expect(aboutMe).toContainText("ask about the doorknobs in my house");
});
