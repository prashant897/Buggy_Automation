import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class ModelPage extends BasePage {
  constructor(page: Page) { super(page); }

  async openModel(model: string) {
    await this.page.locator(`a[href^="/model"]:has-text("${model}")`).first().click();
  }
}