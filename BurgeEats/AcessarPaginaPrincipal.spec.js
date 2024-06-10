// @ts-check
const { test, expect } = require('@playwright/test');

test('Deve acessar a página de cadastro', async ({ page }) => {
  
  await page.goto('/');

  const Titulo = page.locator('h1')
  
  ////h1[text()="Seja um parceiro entregador pela Buger Eats"]

  await expect(Titulo).toHaveText('Seja um parceiro entregador pela Buger Eats')

  //await page.getByRole('button').click();
  await page.getByRole('link', { name: 'Cadastre-se para fazer' }).click()
});



