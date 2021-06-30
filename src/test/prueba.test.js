const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
    
    it('Prueba mensaje', async () => {
       await request(app)
            .get('/')
            .expect('Hello Word!'); 
    });
})