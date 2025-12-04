import { test, expect } from '@playwright/test';
import HomePage from '../src/pages/HomePage';
import AuthPage from '../src/pages/AuthPage';
import testData from '../fixtures/testData.json';

test('User can register', async ({ page }) => {
  const home = new HomePage(page);
  const auth = new AuthPage(page);

  await home.goto('/');
  await home.openRegister();

  await auth.register(
    testData.users.newUser.login, 
    'Test', 
    'User', 
    testData.users.newUser.password
  );

  await expect(page.locator('text=Registration')).toBeVisible();
});

test('User can login', async ({ page }) => {
  const home = new HomePage(page);
  const auth = new AuthPage(page);

  await home.goto('/');
  await home.openLogin();
  await auth.login(testData.users.validUser.login, testData.users.validUser.password);

  await expect(page.locator(`text=${testData.users.validUser.login}`)).toBeVisible();
});
