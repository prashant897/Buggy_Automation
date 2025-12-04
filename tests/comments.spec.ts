import { test, expect } from '@playwright/test';
import HomePage from '../src/pages/HomePage';
import AuthPage from '../src/pages/AuthPage';
import ModelPage from '../src/pages/ModelPage';
import CommentsPage from '../src/pages/CommentsPage';
import testData from '../fixtures/testData.json';

test('User can add a comment and vote', async ({ page }) => {
  const home = new HomePage(page);
  const auth = new AuthPage(page);
  const model = new ModelPage(page);
  const comment = new CommentsPage(page);

  await home.goto('/');
  await home.openLogin();
  await auth.login(testData.users.validUser.login, testData.users.validUser.password);

  await home.openPopularMake('Lamborghini');
  await model.openModel('Diablo');

  await comment.addComment(testData.comments.valid);
  await comment.voteUp();

  await expect(page.locator(`text=${testData.comments.valid}`)).toBeVisible();
});
