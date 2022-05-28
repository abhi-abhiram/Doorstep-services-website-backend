import express from 'express';
import {
  registerUser,
  addAddress,
  loginUser,
  logout,
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
   *     summary: user login
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

/**
 * @openapi
 '/api/user/logout':
   *  get:
   *     tags:
   *     - User
   *     summary: user logout
   *     responses:
   *      200:
   *        description: logout successfull
   */
router.route('/logout').get(logout);

export default router;
