const Pet = require('../model/pet');

module.exports.register =async (newPet) => {
  if (!newPet) {
    throw new Error('No new pet');
  }
  try {
    const existingPet = await Pet.findOne({email: newPet.email});
    // eslint-disable-next-line max-len
    if (existingPet) throw new Error(`A pet with the email ${newPet.email} already exists`);
    const savePet = new Pet(newPet);
    await savePet.save();
    return {
      savePetId: savePet._id,
    };
  } catch (err) {
    throw err;
  }
  // await Pet.create(newPet)
};
