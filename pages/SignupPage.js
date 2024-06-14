import { test, expect } from '@playwright/test';

export const login = async (page) => {
    await page.goto('/');
    const Titulo = page.locator('h1');
    await expect(Titulo).toHaveText('Seja um parceiro entregador pela Buger Eats');
    await page.locator('//strong[text()="Cadastre-se para fazer entregas"]').click();
};
