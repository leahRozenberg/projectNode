import express from 'express'
import {
    createAdvertiser,
    updateAdvertiser,
    removeAdvertiser,
} from '../controllers/advertiser.js'
import invalidation from '../middleWares/invalidation.js'
const router =express.Router()

router.post('',invalidation,createAdvertiser)
router.put('/:id',invalidation, updateAdvertiser)
router.delete('/:id', removeAdvertiser) 

export default router