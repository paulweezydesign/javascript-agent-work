import { expect, test } from '@playwright/test';

test.describe('launcher to snippet flow', () => {
  test('shows all launcher entry actions and snippet actions in workspace', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('button', { name: /start new chat/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /open snippet/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /attach project/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /recent work/i })).toBeVisible();
    await expect(
      page.getByText('Connect a real codebase so edits, runs, and snapshots stay in context.'),
    ).toBeVisible();

    await page.goto('/workspaces/demo-workspace');

    await expect(page.getByRole('button', { name: /open in editor/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /save to snippets/i })).toBeVisible();
  });
});
