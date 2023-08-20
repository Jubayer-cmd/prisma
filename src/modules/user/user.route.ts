
import  express  from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/create-user', userController.createUser);
router.post('/profile', userController.insertUserProfile);

router.get('/:id', userController.getUserById);

export const userRoutes = router