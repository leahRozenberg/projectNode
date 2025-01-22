import Category from '../models/category.js';

//הוספת קטגוריה
export const createCategory = async (req, res) => {
    const {name} = req.body;
    const c=new Category({name});
    c.save()
    .then(c=>{
        res.status(200).send(c)
    })
    .catch(err=>{
        res.status(500).send({error: err.message});
    })
};

//שליפת כל הקטגוריות
export const getCategory = (req, res) => {
    Category.find().then(c=>{
        res.status(200).send(c)
    })
    .catch(err=>{
        res.status(500).send({error:err.message})
    })
}