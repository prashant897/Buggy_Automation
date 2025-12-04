import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class CommentsPage extends BasePage {
  constructor(page: Page) { super(page); }

  async addComment(comment: string) {
    await this.page.locator('textarea').first().fill(comment);
    await this.page.getByRole('button', { name: /add/i }).click();
  }

  async voteUp() {
    await this.page.getByRole('button', { name: /vote|thumb|up/i }).first().click();
  }
}