import express from 'express';
import {
  getProfessional,
  getProfessionals,
  getUser,
  getUsers,
  loginAdmin,
} from '../controllers/adminController';
import isAuthenticated from '../middleware/auth';
import { Roles } from '../utils/getClient';

const router = express.Router();

/**
 * @openapi
 '/api/admin/login':
   *  post:
   *     tags:
   *     - Admin
   *     summary: Admin login
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
router.route('/login').post(loginAdmin);

/**
 * @openapi
 '/api/admin/getUser/{userId}':
   *  get:
   *     tags:
   *     - Admin
   *     summary: Get user by id
   *     parameters:
   *      - in: path
   *        name: userId
   *        schema:
   *          type: integer
   *        required: true
   *     responses:
   *      200:
   *        description: user found
   *      400:
   *        description: user not found
   */
router
  .route('/getUser/:userId')
  .get<{ userId: number } | any>(isAuthenticated(Roles.ADMIN), getUser);

/**
 * @openapi
 '/api/admin/getUsers':
   *  get:
   *     tags:
   *     - Admin
   *     summary: get users
   *     responses:
   *      200:
   *        description: success
   */
router.route('/getUsers').get(isAuthenticated(Roles.ADMIN), getUsers);

/**
 * @openapi
 '/api/admin/getProfessional/{professionalId}':
   *  get:
   *     tags:
   *     - Admin
   *     summary: Get professsional by id
   *     parameters:
   *      - in: path
   *        name: professionalId
   *        schema:
   *          type: integer
   *        required: true
   *     responses:
   *      200:
   *        description: professional found
   *      400:
   *        description: professional not found
   */
router
  .route('/getProfessional/:professionalId')
  .get<{ professionalId: number } | any>(
    isAuthenticated(Roles.ADMIN),
    getProfessional
  );

/**
 * @openapi
 '/api/admin/getProfessionals':
   *  get:
   *     tags:
   *     - Admin
   *     summary: get professional
   *     responses:
   *      200:
   *        description: success
   */
router.route('/getProfessionals').get(getProfessionals);

export default router;
