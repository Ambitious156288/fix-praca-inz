import mongoose from "mongoose";

const multipleGallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object],
    user_id: {
        type: String,
        required: true,
    },
});

const multipleGallery = mongoose.model("multipleGallery", multipleGallerySchema);

export default multipleGallery;
