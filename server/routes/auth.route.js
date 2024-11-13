import express from 'express';
import { getMe, login, logout, signUp } from "../controllers/auth.controller.js";
import {protectRoute} from '../middleware/protectRoute.js';

const router = express.Router();

/*
getMe
post signup
post login
post logout
*/
router.get('/api/user', protectRoute, getMe);
router.post('/api/signUp', signUp);
router.post('/api/login', login);
router.post('/api/logout', logout);

export default router;