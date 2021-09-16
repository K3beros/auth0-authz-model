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

describe('Errors thrown when', () => {
  it('Email is repeated', async () => {
    await createPet.register(newPetComplete);
    await expect(createPet.register(duplicatePet)).rejects.toThrow();
  });
});


const newPetComplete = {
  name: 'jack',
  type: 'dog',
  owners_name: 'jessica',
  email: 'jack@mail.com',
  password: 'kkkkk',
  gender: 'Male',
  features: 'brown eyes',
  breed: 'shephard',
  age: 9,
};

// eslint-disable-next-line no-unused-vars
const duplicatePet = {
  name: 'jake',
  type: 'cat',
  owners_name: 'jeff',
  email: 'jack@mail.com',
  password: 'kkkkk',
  gender: 'Female',
  features: 'black eyes',
  breed: 'wild cat',
  age: 9,
};
