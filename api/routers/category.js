import express from 'express'
import {
    createCategory,
    getCategory
} from '../controllers/category.js'
// import upload from '../middleWares/upLoad.js'
const router =express.Router()

router.post('',createCategory)
router.get('', getCategory)

export default router