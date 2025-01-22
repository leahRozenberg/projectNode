import express from 'express'
import {
    getAll,
    createCity,
    getApartmentsByCity
} from '../controllers/city.js'
import invalidation from '../middleWares/invalidation.js'

const router =express.Router()

router.post('',invalidation,createCity)
router.get('/getAll', getAll)
router.get('/getapartments/:name', getApartmentsByCity)

export default router