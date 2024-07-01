import { Router } from 'express';
const router = Router();
import upload from '../middlewares/multer.js';

import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js';

router.post('/', upload.array('images', 10), createProduct);
router.get('/getProducts', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
