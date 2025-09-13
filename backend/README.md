# BookMedico Backend

This is the backend API for BookMedico, built with Node.js, Express, and MongoDB.

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/BookMedico.git
   cd BookMedico/backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the `backend` folder.
   - Add the following (replace with your values):
     ```
     MONGODB_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     PORT=4000
     ```

## Running the Server

```sh
npm start
```
or
```sh
node server.js
```

The server will start on the port specified in `.env` (default: 4000).

---

## API Routes and Their Work

### `/api/admin` ([backend/routes/adminRoute.js](backend/routes/adminRoute.js))

- **POST `/add-doctor`**  
  Adds a new doctor to the system (admin only, with image upload).
- **POST `/login`**  
  Authenticates an admin user.
- **POST `/all-doctors`**  
  Returns a list of all doctors (admin only).
- **POST `/change-availabilty`**  
  Changes a doctor's availability status (admin only).
- **GET `/appointments`**  
  Lists all appointments for admin review.
- **POST `/cancel-appointment`**  
  Allows admin to cancel an appointment.
- **GET `/dashboard`**  
  Provides admin dashboard statistics.

**Purpose:**  
Admin routes are for managing doctors, appointments, and accessing system statistics. Only authenticated admins can use most endpoints.

---

### `/api/doctor` ([backend/routes/doctorRoute.js](backend/routes/doctorRoute.js))

- **GET `/list`**  
  Lists all doctors (public).
- **POST `/login`**  
  Authenticates a doctor.
- **GET `/appointments`**  
  Lists appointments for the logged-in doctor.
- **POST `/appointment-cancel`**  
  Allows doctor to cancel an appointment.
- **POST `/appointment-complete`**  
  Marks an appointment as completed.
- **GET `/dashboard`**  
  Provides doctor dashboard statistics.
- **GET `/profile`**  
  Returns doctor's profile info.
- **POST `/update-profile`**  
  Updates doctor's profile info.

**Purpose:**  
Doctor routes allow doctors to manage their appointments, update their profile, and view dashboard stats. Authentication is required for most actions.

---

### `/api/user` ([backend/routes/userRoutes.js](backend/routes/userRoutes.js))

- **POST `/register`**  
  Registers a new user.
- **POST `/login`**  
  Authenticates a user.
- **GET `/get-profile`**  
  Gets user profile info.
- **POST `/update-profile`**  
  Updates user profile info (with image upload).
- **POST `/book-appointment`**  
  Books an appointment with a doctor.
- **GET `/appointments`**  
  Lists user's appointments.
- **POST `/cancel-appointment`**  
  Cancels a user's appointment.
- **POST `/payment-razorpay`**  
  Initiates payment via Razorpay.
- **POST `/verify-razorpay`**  
  Verifies Razorpay payment.

**Purpose:**  
User routes allow users to register, login, manage their profile, book/cancel appointments, and handle payments. Authentication is required for most endpoints.

---

## Project Structure

- `config/` – Database and cloudinary configuration
- `controllers/` – Route handlers for admin, doctor, and user
- `middlewares/` – Authentication and file upload
- `models/` – Mongoose schemas for users, doctors, appointments
- `routes/` – API route definitions
- `server.js` – Entry point

---

For more details, see the main [README.md](README.md) in the