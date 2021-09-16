/* eslint-disable camelcase */
const express = require('express');
const createPet = require('../controller/userController').register;
const router = express();


router.post('/register', async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    // eslint-disable-next-line max-len
    const {name, type, owners_name, email, password, gender, features, breed, age} = req.body;
    const newPet = {
      name, type, owners_name, email, password, gender, features, breed, age,
    };
    // await createPet(newPet).then(pet => {
    //     console.log('Pet here', pet)
    //     res.json({
    //         pet
    //     })
    // },
    // (e) => {
    //     res.status(400).send(e)
    // })
    const petId = await createPet(newPet);
    console.log(petId);
    res.json(
        petId,
    );
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get('/', (req, res) => {
  res.status(200).json('Hello world');
});

module.exports = router;
