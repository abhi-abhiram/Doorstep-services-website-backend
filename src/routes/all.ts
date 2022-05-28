import express from 'express';
import { getClientDetails } from '../controllers/allController';
import isAuthenticated from '../middleware/auth';
import { Roles } from '../utils/getClient';

const router = express.Router();

/**
 * @openapi
 '/api/all/getClient':
   *  get:
   *     tags:
   *     - All
   *     summary: get client details
   *     responses:
   *      200:
   *        description: success
   */
router.route('/getClient').get(isAuthenticated(Roles.ALL), getClientDetails);

export default router;
