import Apartment from "../models/apartment.js";
import Category from "../models/category.js";
import Advertiser from "../models/advertiser.js";
import City from "../models/city.js";
//הוספת דירה
export const createApartment = (req, res) => {
    const { name, description, image,
        codeCategory,codeCity,
        address, numBeds, additives ,price,
        codeAdvertiser } = req.body
        const newApartment = new Apartment({
            name, description, image
            , codeCategory, codeCity,
            address, numBeds, additives , price,
            codeAdvertiser
        });
        
        newApartment.save()
        .then(apartment => {
            Category.findByIdAndUpdate(codeCategory,{$push : { apartments: apartment._id } })
            City.findByIdAndUpdate(codeCity,{$push : { apartments: apartment._id } })
            Advertiser.findByIdAndUpdate(codeAdvertiser,{$push : { apartments: apartment._id } })

            res.status(200).send(apartment)
        })
        .catch(err => {
            res.status(500).send({error: err.message})
        })
}
//עדכון דירה
export const updateApartment=(req,res)=>{
    const {codeCategory,codeCity,codeAdvertiser}=req.params
    Apartment.findByIdAndUpdate(req.query.id,req.body)
    .then(apartment =>{
        Category.findByIdAndDelete(codeCategory,{$pop : { apartments: apartment._id } })
        City.findByIdAndDelete(codeCity,{$pop: { apartments: apartment._id } })
        Advertiser.findByIdAndDelete(codeAdvertiser,{$pop : { apartments: apartment._id } })
        Category.findByIdAndUpdate(codeCategory,{$push : { apartments: apartment._id } })
        City.findByIdAndUpdate(codeCity,{$push : { apartments: apartment._id } })
        Advertiser.findByIdAndUpdate(codeAdvertiser,{$push : { apartments: apartment._id } })

        res.status(200).send(apartment)
    })
    .catch(err=>{
        res.status(500).send({error:err.message})
    })
}
//מחיקת דירה
export const removeApartment=(req, res) => {
    Apartment.findByIdAndDelete(req.query.id)
    .then(apartment =>{
        res.status(200).send({message:`deleted successfully`})
    .catch(err => {
        res.status(500).send({error:err.message})
    })
    })
}
export const getApartment = (req, res) =>{
    Apartment.find().then(data=>{
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({error:err.message})
    })
}
export const getApartmentById = (req, res) =>{
    Apartment.findById(req.query.id)
    .then(data=>{
        if(!data)
            res.status(404).send("data not found");
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({error:err.message})
    })
}

