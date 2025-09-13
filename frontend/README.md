# BookMedico Frontend

This is the frontend for BookMedico, built with React, Vite, and Tailwind CSS. It provides a user-friendly interface for booking doctor appointments, managing profiles, and accessing healthcare information.

## Installation

1. **Navigate to the frontend folder**
   ```sh
   cd BookMedico/frontend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   The app will run locally at [http://localhost:5173](http://localhost:5173).

## Libraries Used & Their Purpose

- **React**: Core library for building UI components.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router DOM**: Routing for single-page application navigation.
- **Axios**: HTTP client for API requests to the backend.
- **React Toastify**: For showing notifications and alerts.
- **@tailwindcss/vite**: Integrates Tailwind CSS with Vite.

## How Each Route Works

The main routes are defined in [`src/App.jsx`](src/App.jsx):

- `/` or `/home`  
  **Component:** [`Home`](src/pages/Home.jsx)  
  **Purpose:** Landing page with featured doctors, specialties, and banners.

- `/about`  
  **Component:** [`About`](src/pages/About.jsx)  
  **Purpose:** Information about BookMedico and its vision.

- `/contact`  
  **Component:** [`Contact`](src/pages/Contact.jsx)  
  **Purpose:** Contact form and company contact details.

- `/login`  
  **Component:** [`Login`](src/pages/Login.jsx)  
  **Purpose:** User authentication (login/signup).

- `/doctors`  
  **Component:** [`Doctors`](src/pages/Doctors.jsx)  
  **Purpose:** List all doctors available for appointments.

- `/doctors/:speciality`  
  **Component:** [`Doctors`](src/pages/Doctors.jsx)  
  **Purpose:** Filter doctors by specialty.

- `/my-profile`  
  **Component:** [`MyProfile`](src/pages/MyProfile.jsx)  
  **Purpose:** View and update user profile.

- `/my-appointments`  
  **Component:** [`MyAppointments`](src/pages/MyAppointments.jsx)  
  **Purpose:** View and manage user's booked appointments.

- `/appointment/:docId`  
  **Component:** [`Appointment`](src/pages/Appointment.jsx)  
  **Purpose:** Book an appointment with a specific doctor.

## Project Structure

- `src/components/` – Reusable UI components (NavBar, Footer, Header, etc.)
- `src/pages/` – Main pages for each route.
- `src/context/` – Global state management using React Context.
- `src/assets/` – Images and icons.
- `index.html` – Main HTML entry point.
- `vite.config.js` – Vite configuration.

---

For backend API details, see [../backend/README.md](../backend/README.md)