import mongoose from "mongoose";

const AdvertiserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxLength: 100
    },
    password: {
        type: String,
        minLength: 5,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    phoneNumber2: {
        type: String,
        required: false
    },
    apartments: [
        {
            type: mongoose.Types.ObjectId,
            ref:'Apartment'
        }
    ]
});
export default mongoose.model("Advertiser", AdvertiserSchema);
