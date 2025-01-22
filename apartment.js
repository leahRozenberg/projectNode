import express from 'express'
import {
    createApartment,
    updateApartment,
    removeApartment
} from '../controllers/apartment.js'

const router =express.Router()

router.post('',createApartment)
router.put('/:id', updateApartment)
router.delete('/:id', removeApartment)


export default router