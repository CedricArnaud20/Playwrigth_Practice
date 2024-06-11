import { test, expect } from '@playwright/test';


 const dadosCad ={
    nome :'Cedric Arnaud',
    cpf:'09846899874',
    Email :'cedric@gmail.com',
    whatsapp: '62953655455',
    Cep: '73255902',
    numero: '20',
    Complemento:'Sem complemento'

 }


// Esse before each basicamente vai sempre acesar o formulário de cadastro antes de cada teste ele provisóario até que faço a cciação do custom commands
test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const Titulo = page.locator('h1')
  
    await expect(Titulo).toHaveText('Seja um parceiro entregador pela Buger Eats')

    await page.locator('//strong[text()="Cadastre-se para fazer entregas"]').click()
});


test('Validar que o Campo nome é obrigatório', async ({ page }) => {

    //Preenchendo os campos 
  
    await page.getByPlaceholder('Nome completo').fill(dadosCad.nome)

    await page.getByPlaceholder('CPF somente números').fill(dadosCad.cpf)

    await page.getByPlaceholder('E-mail').fill(dadosCad.Email)

    await page.getByPlaceholder('Whatsapp').fill(dadosCad.whatsapp)

    await page.getByPlaceholder('CEP').fill(dadosCad.Cep)

    //Clicar no botão Buscar Cep 

    await page.getByRole('button', { name: 'Buscar CEP' }).click()

    await page.getByPlaceholder('Número', { exact: true }).fill(dadosCad.numero)

    await page.getByPlaceholder('Complemento').fill(dadosCad.Complemento)

    await page.locator('li').filter({ hasText: 'Moto' }).click()

    await page.locator('button[type="submit"]').click()

    // await page.getByPlaceholder('').fill(dadosCad.)

    

    
});