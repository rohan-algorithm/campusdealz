import Product from '../models/product.js';
import  Cloudinary  from '../utils/cloudinary.js'


export const createProduct = async (req, res) => {
    const { title, description, price ,college,seller} = req.body;

    const files = req.files; // Array of files
  
    try {
      // Upload images to Cloudinary
      const imageUploadPromises = files.map(file =>
        new Promise((resolve, reject) => {
          const uploadStream = Cloudinary.uploader.upload_stream(
            { folder: 'products' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result.public_id); // URL of the uploaded image
            }
          );
          uploadStream.end(file.buffer);
        })
      );
  
      const uploadResults = await Promise.all(imageUploadPromises);
  
      // Extract URLs from the upload results
      const imageUrls = uploadResults;
  
      // Create new product
      const newProduct = new Product({
        title,
        description,
        images: imageUrls,
        price,
        college,
        seller
      });
      console.log(newProduct);
      const product = await newProduct.save();
      res.json(product);
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };



export const getProducts = async (req, res) => {

  const { college } = req.query;
  console.log(college);
  // console.log(req.params.id);
  try {
    const products = await Product.find({ college });
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    // console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateProduct = async (req, res) => {
  const { title, description, price } = req.body;

  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    product.title = title;
    product.description = description;
    product.price = price;

    product = await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    await product.remove();
    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
