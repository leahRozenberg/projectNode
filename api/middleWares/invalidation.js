import Category from '../models/category.js';
import City from '../models/city.js';
import Advertiser from '../models/advertiser.js';
const invalidation = (req, res, next) => {
    const { name, description, image,
        codeCategory, codeCity,
        address, numBeds, additives, price,
        codeAdvertiser, email, password } = req.body
    if (name && typeof name !== 'string')
        return res.status(404).send({ message: 'Invalid name' })
    if (description && typeof description !== 'string')
        return res.status(404).send({ message: 'Invalid description' })
    if (image && typeof image !== 'string')
        return res.status(404).send({ message: 'Invalid image' })
    if (address && typeof address !== 'string')
        return res.status(404).send({ message: 'Invalid adress' })
    if (numBeds && typeof numBeds !== 'number')
        return res.status(404).send({ message: 'Invalid numBeds' })
    if (price && typeof price !== 'number')
        return res.status(404).send({ message: 'Invalid image' })
    if (password && (typeof password !== 'string' || password.length < 5))
        return res.status(404).send({ message: 'Invalid password' })
    if (email && (typeof email!== 'string' || !email.includes('@') ||!email.includes('.com')))
    if (codeCategory) {
        Category.findById(codeCategory)
            .then(category => {
                console.log(category)
            })
            .catch(err => {
                return res.status(500).send({ message: err.message })
            })
    }
    if (codeCity) {
        City.findById(codeCity)
            .then(city => {
                console.log(city)
            })
            .catch(err => {
                return res.status(500).send({ message: err.message })
            })
    }
    if (codeAdvertiser) {
        Advertiser.findById(codeAdvertiser)
            .then(advertiser => {
                console.log(advertiser)
            })
            .catch(err => {
                return res.status(500).send({ message: err.message })
            })
    }
    next()

}
export default invalidation;