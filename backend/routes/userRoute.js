import express from 'express';
import { registerUser, loginUser ,getUser} from '../controller/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/info/:id', getUser);

export default router;
