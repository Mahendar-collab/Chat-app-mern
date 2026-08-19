import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API key exists:", !!process.env.CLOUDINARY_API_KEY);
console.log("API secret exists:", !!process.env.CLOUDINARY_API_SECRET);

try {

    const result = await cloudinary.uploader.upload(
        "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    );

    console.log("UPLOAD SUCCESS");
    console.log(result.secure_url);

} catch (error) {

    console.log("========== CLOUDINARY ERROR ==========");

    console.log("Message:", error.message);
    console.log("HTTP code:", error.http_code);
    console.log("Name:", error.name);

    console.log("Full error:", error);

    console.log("Response:", error.response);

    console.log("Response headers:", error.response?.headers);

    console.log(
        "X-Cld-Error:",
        error.response?.headers?.["x-cld-error"]
    );

    console.log("======================================");
}