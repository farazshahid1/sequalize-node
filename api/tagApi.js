const { Tag } = require("../models");

console.log("Tag api")

const getTags = () => Tag.findAll({
    attributes: {
        exclude: ['createdAt', 'updatedAt', 'timestamps']
    },
})

module.exports = {getTags}
