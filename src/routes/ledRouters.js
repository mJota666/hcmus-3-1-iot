import express from 'express'
const router = express.Router()
import ledControllers from './../app/controllers/LedControllers.js'

router.use('/', ledControllers.index)

export default router