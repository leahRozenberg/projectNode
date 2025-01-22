import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    }
});
export default CategorySchema;