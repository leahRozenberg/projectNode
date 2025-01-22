import express from 'express'
import {
    createApartment,
    updateApartment,
    removeApartment,
    getApartment,
    getApartmentById
} from '../controllers/apartment.js'
const router =express.Router()

router.post('',createApartment)
router.put('', updateApartment)
router.delete('', removeApartment)
router.get('',getApartment)
router.get('/byId',getApartmentById)

export default router