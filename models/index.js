const { DataTypes } = require("sequelize");
const { Tag } = require("./tag.model");
const { Vocabulary } = require("./vocabulary.model");
const Package = require("./package.model");
const PackageTag = require("./packageTag.model");

const tagNameLength = 100

// Vocabulary.hasMany(Tag, {
//     foreignKey: { name: "vocabulary_id", type: DataTypes.STRING(tagNameLength) }
// });
// Tag.belongsTo(Vocabulary, {
//     foreignKey: { name: "vocabulary_id", type: DataTypes.STRING(tagNameLength) }
// })

// Package and Tag many-to-many relation
// Package.belongsToMany(Tag, {
//     through:PackageTag,
//     foreignKey:'package_id',
//     otherKey:'tag_id'
// })

// Tag.belongsToMany(Package, {
//     through:PackageTag,
//     foreignKey:'tag_id',
//     otherKey:'package_id'
// })

module.exports = { Tag, Vocabulary }