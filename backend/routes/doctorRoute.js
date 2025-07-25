import express from 'express';
import { appointmentsDoctor, doctorList, loginDoctor, appointmentCancel, appointmentComplete, doctorDashboard } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/AuthDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list', doctorList);
doctorRouter.post('/login', loginDoctor);
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor);
doctorRouter.post('/appointment-cancel', authDoctor, appointmentCancel);
doctorRouter.post('/appointment-complete', authDoctor, appointmentComplete);
doctorRouter.get('/dashboard', authDoctor, doctorDashboard);


export default doctorRouter