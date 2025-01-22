import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    apartments: [{
        type:mongoose.Types.ObjectId,
        ref: 'Apartment',
    }]
});
export default mongoose.model('Category',CategorySchema)