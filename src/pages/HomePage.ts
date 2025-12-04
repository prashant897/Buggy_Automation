import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class HomePage extends BasePage {
  constructor(page: Page) { super(page); }
  async openRegister() { await this.page.locator('a[href="/register"]').click(); }
  async openLogin() { await this.page.locator('a[href="/login"]').click(); }
  async openPopularMake(make: string) {
    await this.page.locator(`a:has-text("${make}")`).first().click();
  }
}