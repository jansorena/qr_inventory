import express from 'express';
import { registerParlante, getEquipo } from '../controllers/post.controllers.js';

const router = express.Router();

router.post('/registerParlante', registerParlante);
router.get('/:tipo/:id_equipo', getEquipo);

export default router;