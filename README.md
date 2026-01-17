# Doctor Appointment Booking System

A full-stack web application for managing doctor appointments efficiently. Patients can register, browse doctors, book appointments, and doctors can manage their schedules seamlessly.

---

## 1. Features

### 1.1 Patient Features
1. Register and login
2. Browse doctors by specialization
3. Book, view, and cancel appointments
4. Receive email confirmations (optional)

### 1.2 Doctor Features
1. Register and login
2. Manage available appointment slots
3. View upcoming appointments
4. Update personal profile and specialization

### 1.3 Admin Panel (Optional)
1. Manage users (patients and doctors)
2. View all appointments
3. Control system-wide settings

---

## 2. Tech Stack

1. **Frontend:** React.js, HTML, CSS, JavaScript  
2. **Backend:** Node.js, Express.js  
3. **Database:** MongoDB  
4. **Authentication:** JWT (JSON Web Tokens)  
5. **File Storage / Media:** Cloudinary (optional)

---

##Backend Setup
cd backend
npm install        # Install dependencies
npm run server     # Start the backend server

##Frontend Setup
cd frontend
npm install        # Install dependencies
npm start          # Start the frontend React app

##Environment Variables

# General
CURRENCY="INR"
JWT_SECRET="your_jwt_secret"

# Admin Panel Credentials
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="adminpassword"

# MongoDB Setup
MONGODB_URI="your_mongodb_connection_string"

# Cloudinary Setup (optional, for image uploads)
CLOUDINARY_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"



