import express from 'express'
import { dbConeection } from './database/dbConnection.js'
import productRouter from './modules/product/product.router.js'
import categoryRouter from './modules/category/category.router.js'
const app = express()
const port = 6000

app.use('/api/v1/products',productRouter)
app.use('/api/v1/categories',categoryRouter)


dbConeection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))