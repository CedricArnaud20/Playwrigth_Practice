
import { test, expect } from '@playwright/test';

import dadosCad from '../files/dados.json';
import { login } from '../pages/SignupPage';





//Esse before each basicamente vai sempre acesar o formulário de cadastro antes de cada teste ele provisóario até que faço a cciação do custom commands


test('Validar que o Campo nome é obrigatório', async ({ page }) => {

    await login(page);
    

    //Preenchendo os campos 
  
    await page.getByPlaceholder('Nome completo').fill('')

    await page.getByPlaceholder('CPF somente números').fill(dadosCad.cpf)

    await page.getByPlaceholder('E-mail').fill(dadosCad.Email)

    await page.getByPlaceholder('Whatsapp').fill(dadosCad.whatsapp)

    await page.getByPlaceholder('CEP').fill(dadosCad.Cep)

    //Clicar no botão Buscar Cep 

    await page.getByRole('button', { name: 'Buscar CEP' }).click()

    //Preenchendo os campos 

    await page.getByPlaceholder('Número', { exact: true }).fill(dadosCad.numero)

    await page.getByPlaceholder('Complemento').fill(dadosCad.Complemento)

    await page.locator('li').filter({ hasText: 'Moto' }).click()

    //Clicar no botão Cadastrase para finalizar o cadastro

     await page.locator('button[type="submit"]').click()

    // await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));


    await page.getByAltText('É necessário informar o nome').isVisible

    

    
});


