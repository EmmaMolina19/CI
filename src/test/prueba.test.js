const app = require('../index');
const request = require('supertest');

describe('GET /', () => {
    
    it('Prueba mensaje', async () => {
       await request(app)
            .get('/')
            .expect('Aprobado'); 
    });
})