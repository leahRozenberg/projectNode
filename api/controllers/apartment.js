import Apartment from "../models/apartment.js";
import City from "../models/city.js";
import Category from "../models/category.js";
import Advertiser from "../models/advertiser.js";
//הוספת דירה
export const createApartment = (req, res) => {
    const { name, description, image,
        codeCategory, codeCity,
        address, numBeds, additives, price,
        codeAdvertiser } = req.body
    const newApartment = new Apartment({
        name, description, image
        , codeCategory, codeCity,
        address, numBeds, additives, price,
        codeAdvertiser
    });
    newApartment.save()
        .then(apartment => {
            City.findByIdAndUpdate(codeCity, { $push: { apartments: apartment._id } })
            Category.findByIdAndUpdate(codeCategory, { $push: { apartments: apartment._id } })
            Advertiser.findByIdAndUpdate(codeAdvertiser, { $push: { apartments: apartment._id } })
            res.status(200).send(apartment)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
//עדכון דירה
export const updateApartment = (req, res) => {
    const {
        codeCategory, codeCity, codeAdvertiser
    } = req.body;
    Apartment.findByIdAndUpdate(req.params.id, res.body)
        .then(apartment => {
            City.findByIdAndDelete(codeCity, { $pop: { apartments: apartment._id } })
            City.findByIdAndUpdate(codeCity, { $push: { apartments: apartment._id } })
            Category.findByIdAndDelete(codeCategory, { $pop: { apartments: apartment._id } })
            Category.findByIdAndUpdate(codeCategory, { $push: { apartments: apartment._id } })
            Advertiser.findByIdAndDelete(codeAdvertiser, { $pop: { apartments: apartment._id } })
            Advertiser.findByIdAndUpdate(codeAdvertiser, { $push: { apartments: apartment._id } })
            res.status(200).send(apartment)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
//מחיקת דירה
export const removeApartment = (req, res) => {
    Apartment.findByIdAndDelete(req.parasms.id)
        .then(aprtment => {
            City.findByIdAndUpdate(aprtment.codeCity, { $pop: { apartments: aprtment._id } })
            Category.findByIdAndDelete(aprtment.codeCategori, { $pop: { apartments: apartment._id } })
            Advertiser.findByIdAndUpdate(aprtment.codeAdvertiser, { $pop: { apartments: aprtment._id } })
            res.status(200).send({ message: `deleted successfully` })
                .catch(err => {
                    res.status(500).send({ error: err.message })
                })
        })
}

