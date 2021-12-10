const path = require(`path`);
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const olduploadProductImage = async (req, res) => {
  // console.log(req.files);
  if (!req.files) {
    throw new Error("No files Added");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith(`image`)) {
    throw new Error(`CHOOSE AN IMAGE ONLY `);
  }

  const maxsize = 1024 * 1024;
  if (productImage.size > maxsize) {
    throw new Error(`size to big`);
  }
  const imagePath = path.join(
    __dirname,
    `../public/uploads`,
    productImage.name
  );
  await productImage.mv(imagePath);
  res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
};
const uploadProductImage = async (req,res) => {
  const response = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "file-upload",
  });
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(200).json({ image: { src : response.secure_url } });
};

module.exports = {
  uploadProductImage,
};
