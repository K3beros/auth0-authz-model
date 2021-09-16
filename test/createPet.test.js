const request = require('supertest')
const Pet = require('../model/pet')
const createPet = require('../controller/userController')
//const app = require('../app')

const db = require('./db')
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())



describe('Pet', () => {

    it('Can be created sucessfully', async () => {
        expect(async () => {
            await createPet.register(newPetComplete);
        })
            .not
            .toThrow()
    })
})

// describe('Get route', () => {
//     it('page should return hello world', async (done) => {
//       const res = await request(app).get('/v1/pet/')
//       expect(res.statusCode).toEqual(200)
//       expect(res.body).toEqual('Hello world')
//       done()
//     })
//   })



let newPetComplete =  {
    name: 'jack',
    type: 'dog',
    owners_name: 'jessica',
    email: 'jessica@mail.com',
    password: 'kkkkk',
    gender: 'Male',
    features: 'brown eyes',
    breed: 'shephard',
    age: 9
}

let duplicatePet =  {
    name: 'jane',
    type: 'dog',
    owners_name: 'jessica',
    email: 'jessica@mail.com',
    password: 'kkkkk',
    gender: 'Male',
    features: 'brown eyes',
    breed: 'shephard',
    age: 9
}