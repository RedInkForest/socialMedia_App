import express from "express";
import {protectRoute} from '../middleware/protectRoute.js'
import {readNotifications, deleteNotifications} from '../controllers/notification.controller.js'
const router = express.Router();

/*
get notifications
delete notifications
*/
router.get('/api/readNotifications', protectRoute, readNotifications);
router.delete('/api/deleteNotifications', protectRoute, deleteNotifications)


export default router;