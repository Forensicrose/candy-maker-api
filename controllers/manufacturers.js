const models = require('../models')

const getAllManufacturersWithProducts = async (req, res) => {
  const manufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return res.send(manufacturers)
}

const getManufacturersById = async (req, res) => {
  const { id } = req.params
  const manufacturer = await models.Manufacturers.findOne({
    where: { id },
    include: [{ model: models.Products }]
  })

  return manufacturer
    ? res.send(manufacturer)
    : res.sendStatus(404)
}


module.exports = { getAllManufacturersWithProducts, getManufacturersById }
