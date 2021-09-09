const models = require('../models')

const getAllManufacturersWithProducts = async (req, res) => {
  const manufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return res.send(manufacturers)
}

const getManufacturersById = async (req, res) => {
  const { name } = req.params

  const manufacturer = await models.Manufacturers.findOne({
    attributes: ['id', 'name', 'country'],
    where: { name: { [models.Op.like]: `%${name}%` } },
    include: [{
      model: models.Products,
      attributes: ['id', 'name', 'yearIntroduced']
    }]
  })

  return manufacturer
    ? res.send(manufacturer)
    : res.sendStatus(404)
}


module.exports = { getAllManufacturersWithProducts, getManufacturersById }
