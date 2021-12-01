const { it } = require('@jest/globals');
const { getSuperHero, getRepos } = require('./async-await/async');

describe('testando', () => {
    it('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', () => {
        expect(getSuperHero()).toEqual('Wonder Woman')
    });

    it('faça um teste que verifique que os repositórios sd-01-week4-5-project-todo-list sd-01-week4-5-project-meme-generator se encontram nessa lista.', () => {
        expect(getRepos()).toContain('sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator');
    })
})
