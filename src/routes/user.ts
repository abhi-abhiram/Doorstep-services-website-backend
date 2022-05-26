import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

/**
 * @openapi
 '/api/user/register':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.route('/register').post(userController);

export default router;
