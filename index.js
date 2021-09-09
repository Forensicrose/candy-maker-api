const express = require('express')
const app = express()
const { getAllManufacturersWithProducts, getManufacturersById, } = require('./controllers/manufacturers')
const { getAllProductsWithManufacturers, getProductsById } = require('./controllers/products')

app.get('/manufacturers', getAllManufacturersWithProducts)

app.get('/manufacturers/:name', getManufacturersById)

app.get('/products', getAllProductsWithManufacturers)

app.get('/products/:id', getProductsById)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('coding rocks...sometimes')
})
