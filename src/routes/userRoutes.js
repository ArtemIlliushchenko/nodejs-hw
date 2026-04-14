import { celebrate } from 'celebrate';
import { Router } from 'express';
import { requestResetEmailSchema, resetPasswordSchema } from '../validations/authValidation';
import { requestResetEmail, resetPassword } from '../controllers/authController';
import { authenticate } from '../middleware/authenticate';
import { updateUserAvatar } from '../controllers/userController';



const router = Router();


router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail,);
router.post('/auth/reset-password', celebrate(resetPasswordSchema), resetPassword);
router.patch('/users/me/avatar', authenticate, upload.single("avatar"), updateUserAvatar)
