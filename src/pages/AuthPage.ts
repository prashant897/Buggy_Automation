import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class AuthPage extends BasePage {
  constructor(page: Page) { super(page); }

  async register(username: string, firstName: string, lastName: string, password: string) {
    await this.page.locator('input#username').fill(username);
    await this.page.locator('input#firstName').fill(firstName);
    await this.page.locator('input#lastName').fill(lastName);
    await this.page.locator('input#password').fill(password);
    await this.page.locator('input#confirmPassword').fill(password);
    await this.page.getByRole('button', { name: 'Register', exact: true }).click();
  }

  async login(username: string, password: string) {
    await this.page.locator('input[name="login"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login', exact: true }).click();
  }
}