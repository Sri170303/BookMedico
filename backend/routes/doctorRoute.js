import express from 'express';
import { appointmentsDoctor, doctorList, loginDoctor, appointmentCancel, appointmentComplete } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/AuthDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list', doctorList);
doctorRouter.post('/login', loginDoctor);
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor);
doctorRouter.post('/appointment-cancel', authDoctor, appointmentCancel);
doctorRouter.post('/appointment-complete', authDoctor, appointmentComplete);


export default doctorRouter