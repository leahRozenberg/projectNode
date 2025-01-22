import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        maxLength: 25
    },
    apartments: [{
        type: mongoose.Types.ObjectId,
        ref: "Apartment"
    }]
});
export default mongoose.model("City", citySchema);
