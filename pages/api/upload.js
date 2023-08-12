import process from "node:process";

import cloudinary from "cloudinary";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
  if (request.method === "POST") {
    const form = formidable({});
    const [, files] = await form.parse(request);
    const { filepath, newFilename } = files.file[0];
    // See cloudinary docs for more options: https://cloudinary.com/documentation/node_integration
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
    });
    console.log("API: response from cloudinary: ", result);
    return response.status(201).json(result);
  }

  return response.status(405).json({ message: "Method not implemented" });
}
