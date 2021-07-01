const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.view);
router.get('/addclient', userController.form);
router.get('/addphysio', userController.form2);
router.post('/addclient', userController.create);
router.post('/addphysio', userController.create2);

router.get('/addsession', userController.form3);
router.post('/addsession', userController.create3)

router.get('/:id', userController.delete);



module.exports = router;