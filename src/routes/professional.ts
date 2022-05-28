import express from 'express';
import {
  loginProfessional,
  registerProfessional,
} from '../controllers/professionalController';
import { logout } from '../controllers/allController';

const router = express.Router();

/**
 * @openapi
 '/api/professional/register':
   *  post:
   *     tags:
   *     - Professional
   *     summary: Register a professional
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/RegisterProfessional'
   *     responses:
   *      201:
   *        description: Professional created successfully
   *      409:
   *        description: values already exists
   */
router.route('/register').post(registerProfessional);

/**
 * @openapi
 '/api/professional/login':
   *  post:
   *     tags:
   *     - Professional
   *     summary: Professional login
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
router.route('/login').post(loginProfessional);

/**
 * @openapi
 '/api/professional/logout':
   *  get:
   *     tags:
   *     - Professional
   *     summary: Professional logout
   *     responses:
   *      200:
   *        description: logout successfull
   */
router.route('/logout').get(logout);

export default router;
