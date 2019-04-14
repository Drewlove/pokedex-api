const app = require('../server')
const expect = require('chai').expect; 
const request = require('supertest'); 

const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, 
`Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, 
`Ground`, `Ice`, `Normal`, `Poison`, `Psychich`, `Rock`, 
`Steel`, `Water`]


describe('app test suite', ()=> {
    it('runs tests', ()=> {
        return request(app)
        .get('/types')
        .query({type: 'Elf'})
        .then(res => {
            expect(res.body).to.equal("You must choose a valid type")
        });
    });
    it('passes if user input of type matches valid type', ()=> {
        return request(app)
        .get('/types')
        .query({type: 'Bug'})
        .then(res=> {
            expect(res.body).to.equal(`You chose Bug`)
        });
    });
});