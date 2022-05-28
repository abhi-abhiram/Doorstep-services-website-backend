import express from 'express';
import {
  registerUser,
  addAddress,
  loginUser,
} from '../controllers/userController';
import isAuthenticated from '../middleware/auth';

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
   *              $ref: '#/components/schemas/RegisterUser'
   *     responses:
   *      201:
   *        description: user created successfully
   *      409:
   *        description: values already exists
   */
router.route('/register').post(registerUser);

/**
 * @openapi
 '/api/user/addAddress':
   *  post:
   *     tags:
   *     - User
   *     summary: Add address for a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/addAddress'
   *     responses:
   *      201:
   *        description: address added successfully
   */
router.route('/addAddress').post(isAuthenticated, addAddress);

/**
 * @openapi
 '/api/user/login':
   *  post:
   *     tags:
   *     - User
   *     summary: Add address for a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/login'
   *     responses:
   *      200:
   *        description: login success
   */
router.route('/login').post(loginUser);

export default router;
