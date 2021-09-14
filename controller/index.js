const express = require('express')
const createPet = require('../controller/userController').register
const router = express()


router.post('/', async(req, res) => {
    try {
        const {name, type, owners_name, email, password, gender, features, breed,age} = req.body
        const newPet = {
            name, type, owners_name, email, password, gender, features, breed,age
        }
        // await createPet(newPet).then(pet => {
        //     console.log('Pet here', pet)
        //     res.json({
        //         pet
        //     })
        // },
        // (e) => {
        //     res.status(400).send(e)
        // })
        const {petId} = await createPet(newPet)
        res.json({
            petId
        })
    }

    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router