import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        maxLength: 25
    },
    description: {
        type: String,
        required: true,
        maxLength: 100
    },
    image: {
        type: String,
        required: false,
        maxLength: 50
    },
    codeCategori: {
        type: mongoose.Types.ObjectId,
        ref:'Kategori',
        required: true,
    },
    codeCity:{
        type: mongoose.Types.ObjectId,
        ref:'City',
        required: true,
    },
    address: {
        type: String,
        required: true,
        maxLength: 50
    },
    numBeds:{
        type: Number,
        required: true,
        min: 2
    },
    additives:[{
        type: String,
        maxLength: 50
    }],
    price: {
        type: Number,
        required: true,
        min: 100
    },
    codeAdvertiser:{
        type: mongoose.Types.ObjectId,
        ref:'Advertiser',
        required: true,
    }
});
export default mongoose.model("Apartment", apartmentSchema);
