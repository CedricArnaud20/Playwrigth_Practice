// @ts-check
const { test, expect } = require('@playwright/test');


/// Acessar a home páge e deposi acessar o formulário de cadastro 
test('Deve acessar a página de cadastro', async ({ page }) => {
  
  await page.goto('/');

  const Titulo = page.locator('h1')
  
  ////h1[text()="Seja um parceiro entregador pela Buger Eats"]

  await expect(Titulo).toHaveText('Seja um parceiro entregador pela Buger Eats')

  //await page.getByRole('button').click();
  await page.locator('//strong[text()="Cadastre-se para fazer entregas"]').click()
})


// Acessar o formulário de cadastro e depois voltar para página principal
test('Deve voltar para home page', async ({page}) => {

  await page.goto('/');

  const Titulo = page.locator('h1')
  
  ////h1[text()="Seja um parceiro entregador pela Buger Eats"]

  await expect(Titulo).toHaveText('Seja um parceiro entregador pela Buger Eats')

  //await page.getByRole('button').click();
  await page.getByRole('link', { name: 'Cadastre-se para fazer' }).click()

  await page.locator('//header/a[text()="Voltar para home"]').click()  
  
});



