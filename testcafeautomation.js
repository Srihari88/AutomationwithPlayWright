import { Selector } from 'testcafe';

fixture `Facebook Login Test`
    .page `https://www.facebook.com/`;

test('Verify Page', async t => {
    await t
        .typeText(Selector('[data-testid="royal_email"]'), 'srisri.pudu@gmail.com')
        .typeText(Selector('[data-testid="royal_pass"]'), 'password')
        .click(Selector('[data-testid="royal_login_button"]'));
});
