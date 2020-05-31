const request = require('supertest');
const app = require('../../src/app/app');

describe('tools', () => {
  it('Is create new tool', async () => {
    const auth = await request(app).post('/users/auth').send({
      username: 'admin',
      password: 'admin',
    });

    console.log(auth.body.token);
  });
});
