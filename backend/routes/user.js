const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/userController');
const { uploadProfile } = require('../controllers/utils/upload');

const authMiddlewares = require('../middlewares/auth');

router.post('/update-balance', authMiddlewares.verifyToken, authMiddlewares.loginRequired, userController.updateBalance);
router.post('/update-address', authMiddlewares.verifyToken, authMiddlewares.loginRequired, userController.updateAddr);
router.post('/update-details', authMiddlewares.verifyToken, authMiddlewares.loginRequired, uploadProfile.single('profilePicture'), userController.updateDetails);

module.exports = router;