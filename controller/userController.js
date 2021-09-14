const Pet = require('../model/pet')

module.exports.register =async (newPet) => {
    if(!newPet) {
        throw new Error('No new pet')
    }
    try {
        const existingPet = await Pet.find({email: newPet.email})
        if(existingPet){
            console.log('Email already exists')
        }
        const savePet = new Pet(newPet)
        await savePet.save()
        return {
            savePetId: savePet._id
        }
    } catch (err) {
        throw err
    }
    // await Pet.create(newPet)
}