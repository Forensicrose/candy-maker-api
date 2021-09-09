const models = require('../models')

const getAllProductsWithManufacturers = async (req, res) => {
  const products = await models.Products.findAll({
    include: [{ model: models.Manufacturers }]
  })

  return res.send(products)
}

const getProductsById = async (req, res) => {
  const { name } = req.params

  const product = await models.Products.findOne({
    attributes: ['id', 'name', 'yearIntroduced'],
    where: {
      name: {
        [models.Op.like]: `%${name}%`
      }
    },
    include: [{
      model: models.Manufacturers,
      attributes: ['id', 'name', 'country']
    }]
  })

  return product
    ? res.send(product)
    : res.sendStatus(404)
}


module.exports = { getAllProductsWithManufacturers, getProductsById }
