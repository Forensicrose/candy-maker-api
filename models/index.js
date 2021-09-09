const Sequelize = require('sequelize')
const ManufacturersModel = require('./manufacturers')
const ProductsModel = require('./products')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const {
  database, username, host, dialect, password
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)


module.exports = { Manufacturers, Products, Op: Sequelize.Op }
