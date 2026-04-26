import { expect, test } from '@playwright/test';

test.describe('workspace edit run loop', () => {
  test('renders core workspace panels and recovery messaging', async ({ page }) => {
    await page.goto('/workspaces/mvp-loop');

    await expect(page.getByText('Active workspace: mvp-loop')).toBeVisible();
    await expect(page.getByText('Project context can be attached to scope edits and runs.')).toBeVisible();

    await expect(page.getByRole('button', { name: /open in editor/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /save to snippets/i })).toBeVisible();

    await expect(page.getByText(/run history/i)).toBeVisible();
    await expect(page.getByText(/snapshot/i)).toBeVisible();
  });
});
