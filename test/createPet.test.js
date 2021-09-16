const createPet = require('../controller/userController');
// const app = require('../app')

const db = require('./db');
beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());


describe('Pet', () => {
  it('Can be created sucessfully', async () => {
    expect(async () => {
      await createPet.register(newPetComplete);
    })
        .not
        .toThrow();
  });
});

// describe('Get route', () => {
//     it('page should return hello world', async (done) => {
//       const res = await request(app).get('/v1/pet/')
//       expect(res.statusCode).toEqual(200)
//       expect(res.body).toEqual('Hello world')
//       done()
//     })
//   })


const newPetComplete = {
  name: 'jack',
  type: 'dog',
  owners_name: 'jessica',
  email: 'jessica@mail.com',
  password: 'kkkkk',
  gender: 'Male',
  features: 'brown eyes',
  breed: 'shephard',
  age: 9,
};

// eslint-disable-next-line no-unused-vars
const duplicatePet = {
  name: 'jane',
  type: 'dog',
  owners_name: 'jessica',
  email: 'jessica@mail.com',
  password: 'kkkkk',
  gender: 'Male',
  features: 'brown eyes',
  breed: 'shephard',
  age: 9,
};
