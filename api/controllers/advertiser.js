import Advertiser from "../models/advertiser.js";
import Apartment from "../models/apartment.js";
//הוספת מפרסם
export const createAdvertiser = (req, res) => {
    const { email, password, phoneNumber, phoneNumber2 } = req.body
    const newAdvertiser = new Advertiser({
        email, password, phoneNumber, phoneNumber2,apartments: []
    });
    newAdvertiser.save()
        .then(advertiser => {
            res.status(200).send(advertiser)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
//עדכון מפרסם
export const updateAdvertiser = (req, res) => {
    Advertiser.findByIdAndUpdate(req.params.id, res.body)
        .then(advertiser => {
            res.status(200).send(advertiser)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
//מחיקת מפרסם
export const removeAdvertiser = (req, res) => {
    Advertiser.findByIdAndDelete(req.parasms.id)
        .then(advertiser => {
            Apartment.findAndDelete({ codeAdvertiser: advertiser._id  })
            res.status(200).send({ message: `deleted successfully` })
                .catch(err => {
                    res.status(500).send({ error: err.message })
                })
        })
}

