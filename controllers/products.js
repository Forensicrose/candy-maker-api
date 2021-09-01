const models = require('../models')

const getAllProductsWithManufacturers = async (req, res) => {
  const products = await models.Products.findAll({
    include: [{ model: models.Manufacturers }]
  })

  return res.send(products)
}

const getProductsById = async (req, res) => {
  const { id } = req.params
  const product = await models.Products.findOne({
    where: { id },
    include: [{ model: models.Manufacturers }]
  })

  return product
    ? res.send(product)
    : res.sendStatus(404)
}


module.exports = { getAllProductsWithManufacturers, getProductsById }
