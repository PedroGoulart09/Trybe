const { it } = require('@jest/globals');
const { hero } = require('./async-await/async');

describe('testando', () => {
    it('the data is peanut butter', async () => {
        const data = await hero();
        expect(data).toEqual('Wonder Woman');
    });

    it('faça um teste que verifique que os repositórios sd-01-week4-5-project-todo-list sd-01-week4-5-project-meme-generator se encontram nessa lista.', () => {
        expect(getRepos()).toContain('sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator');
    })
})
