const { test, expect } = require('@playwright/test');

test('Testando0205 de Login @login' , async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#password').clicSk();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();SS


  //mudanca para master
});