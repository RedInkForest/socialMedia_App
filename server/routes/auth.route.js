import express from 'express';

import '../middleware/protectRoute.js';

const router = express.Router();

/*
getMe
post signup
post login
post logout
*/
router.get('/', getMe);
router.post('/', signUp);
router.post('/', login);
router.post('/', logout);