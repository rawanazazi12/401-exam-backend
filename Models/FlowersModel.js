const mongoose = require('mongoose')

const flowerSchema = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    photo: { type: String },
    instructions: { type: String }
})

const flowersModel = mongoose.model('flowers', flowerSchema);

const seedFlowersCollection = () => {
    const firstUser = new flowersModel({
        email: "rawanazazi12@gmail.com",
        name: "Azalea",
        photo: "https://www.gardeningknowhow.com/wp-content/uploads/2020/09/azalea.jpg",
        instructions: "Nice Flower"
    })

    const secondUser = new flowersModel({
        email: "tamim.hamoudi@gmail.com",
        name: "Red Cactus",
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Red_cactus_flower_in_dark_room.jpg",
        instructions: "Red Flower"
    })
    firstUser.save();
    secondUser.save();

}

module.exports = { flowersModel, seedFlowersCollection }