
const app = require('../server.js');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
   describe(' GET rickandmorty/{id}', () => {
      it('Responde con status: 200', () => {
         agent.get('/rickandmorty/1').expect(200);
      });
      it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', (done) => {
         agent.get('/rickandmorty/1').expect(200)
            .end((err, res) => {
               if (err) return done(err);
               const properties = ['id', 'name', 'species', 'gender', 'image'];
               for (const prop of properties) {
                  expect(res.body).toHaveProperty(prop);
               }
               done();
            });
      });

      it('Si hay un error responde con status: 500', () => {
         agent.get('/rickandmorty/IDqueNoExiste').expect(500);
      });
   });
})