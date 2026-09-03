import { expect, test } from "@playwright/test";

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
    /Load another historical benchmark:/,
  );
  await expect(page.locator(".benchmark-year")).toHaveText(/.+/);
  await expect(page.getByText("A world taking shape")).toHaveCount(0);
});
