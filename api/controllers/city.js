
import City from "../models/city.js";

//הוספת עיר
export const createCity = (req, res) => {
    const { name } = req.body
        const newCity = new City({
            name
        });
        newCity.save()
        .then(city => {
            res.status(200).send(city)
        })
        .catch(err => {
            res.status(500).send({error: err.message})
        })
}
export const getAll = (req, res) => {
    City.find()
    .then(cities => {
        return res.status(200).send({cities})
    })
    .catch(err => {
        return res.status(500).send({error: err})
    })
}

export const getApartmentsByCity = (req, res) => {
    console.log(req.params.name);
    City.find({ name: req.query.name})
    // .populate('apartments',"-__v")
    .then(city => {
        console.log(city);
        return res.status(200).send(city)
    })
    .catch(err => {
        return res.status(500).send({ error: err.message })
    })
   
}
