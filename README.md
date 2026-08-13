# 🩺 Doctor Appointment Booking System

A **full-stack web application** designed to simplify and digitize the process of booking and managing doctor appointments.

The system provides separate functionality for **Patients, Doctors, and Administrators**, allowing patients to find doctors and book appointments, doctors to manage their schedules, and administrators to manage the overall platform.

## 🌐 Live Demo

🚀 **Live Application:**
https://doctor-appointment-booking-system-rho-nine.vercel.app/

## ✨ Features

### 👤 Patient

* Register and securely log in
* Browse available doctors
* Search doctors based on specialization
* View doctor profiles
* Book appointments
* View upcoming appointments
* View appointment history
* Cancel appointments
* Receive appointment confirmation emails *(optional)*

### 👨‍⚕️ Doctor

* Doctor registration and login
* Create and manage doctor profile
* Add specialization and professional details
* Manage available appointment slots
* View upcoming appointments
* Manage appointment availability

### 🛠️ Admin

* Secure admin authentication
* Manage registered patients
* Manage doctors
* View all appointments
* Monitor the overall booking system
* Manage system-level settings

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       Patient       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │ HTML / CSS / JS      │
                    │ React.js             │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Node.js +         │
                    │   Express.js        │
                    │                     │
                    │ Authentication      │
                    │ Appointment Logic   │
                    │ User Management     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      MongoDB        │
                    │                     │
                    │ Users               │
                    │ Doctors             │
                    │ Appointments        │
                    └─────────────────────┘
```

## 🛠️ Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| **React.js**   | Frontend user interface       |
| **HTML5**      | Page structure                |
| **CSS3**       | Styling and responsive design |
| **JavaScript** | Client-side functionality     |
| **Node.js**    | Backend runtime               |
| **Express.js** | REST API and server framework |
| **MongoDB**    | Database                      |
| **JWT**        | User authentication           |
| **Cloudinary** | Image/media storage           |
| **Vercel**     | Deployment                    |

The repository uses React.js, Node.js, Express.js, MongoDB and JWT authentication, with Cloudinary available for optional media storage.

## 📂 Project Structure

```text
Doctor_Appointment_Booking_System/
│
├── admin/
│   └── ...
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── How_To_Run_Project.pdf
└── README.md
```

> The exact folders may change as the project evolves.

## 🔄 Application Workflow

### Step 1 — User Registration

A patient or doctor creates an account by providing the required information.

```text
User
 ↓
Registration
 ↓
Account Created
 ↓
Login
```

### Step 2 — Authentication

Users log in using their credentials.

The backend generates a **JWT token** after successful authentication.

```text
Login
  ↓
Backend Validation
  ↓
JWT Token
  ↓
Authenticated Session
```

### Step 3 — Doctor Search

Patients can browse doctors and find suitable doctors based on their specialization.

Example:

```text
Specialization: Cardiologist

        ↓

Available Doctors

        ↓

Doctor Profile
```

### Step 4 — Appointment Booking

The patient selects:

* Doctor
* Date
* Available time slot

The appointment is then stored in the database.

```text
Patient
   ↓
Select Doctor
   ↓
Select Date
   ↓
Select Time Slot
   ↓
Confirm Appointment
   ↓
MongoDB
```

### Step 5 — Appointment Management

Patients can view or cancel their appointments.

Doctors can view upcoming appointments and manage their available slots.

## 🔐 Authentication & Security

The application uses **JWT-based authentication** to protect authenticated routes.

Security-related features include:

* JWT authentication
* Protected API routes
* Role-based functionality
* Secure environment variables
* Password-based authentication
* Separate admin credentials

> This project is intended for educational and demonstration purposes. A production healthcare system would require additional security, privacy, compliance, auditing, and access-control measures.

## ☁️ Cloudinary Integration

Cloudinary can be used for storing and managing uploaded media such as doctor profile images.

Environment variables:

```env
CLOUDINARY_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/HARINI-MOHAN-KUMAR/Doctor_Appointment_Booking_System.git

cd Doctor_Appointment_Booking_System
```

### 2. Backend Setup

```bash
cd backend

npm install

npm run server
```

The repository's current setup instructions use `npm install` followed by `npm run server` for the backend.

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend

npm install

npm start
```

The frontend is configured as a React application and uses `npm start` to run the development server.

## 🔑 Environment Variables

Create the required `.env` files and configure your environment variables.

### General Configuration

```env
CURRENCY="INR"
JWT_SECRET="your_jwt_secret"
```

### MongoDB

```env
MONGODB_URI="your_mongodb_connection_string"
```

### Admin

```env
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="adminpassword"
```

### Cloudinary

```env
CLOUDINARY_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

The repository currently documents these environment variables for the application.

⚠️ **Never upload real passwords, JWT secrets, MongoDB credentials, or API keys to GitHub.**

## 📊 Database

MongoDB is used as the application's primary database.

The system manages information such as:

```text
Users
 ├── Patients
 ├── Doctors
 └── Admin

Doctors
 ├── Name
 ├── Specialization
 ├── Profile
 └── Availability

Appointments
 ├── Patient
 ├── Doctor
 ├── Date
 ├── Time
 └── Status
```

## 📱 Main Modules

### Patient Module

```text
Registration
     ↓
Login
     ↓
Browse Doctors
     ↓
View Doctor
     ↓
Select Slot
     ↓
Book Appointment
     ↓
Manage Appointment
```

### Doctor Module

```text
Doctor Login
     ↓
Profile Management
     ↓
Manage Availability
     ↓
View Appointments
```

### Admin Module

```text
Admin Login
     ↓
Dashboard
     ↓
Manage Users
     ↓
Manage Doctors
     ↓
View Appointments
```

## 🎯 Project Objectives

The main objectives of this project are:

* Digitize doctor appointment scheduling.
* Reduce manual appointment management.
* Provide an easy-to-use patient interface.
* Allow doctors to manage their availability.
* Centralize appointment information.
* Provide secure user authentication.
* Demonstrate full-stack web development.

## 💡 Key Learning Outcomes

Through this project, the following concepts were implemented:

* Full-stack web development
* React component development
* REST API development
* Node.js backend development
* Express.js routing
* MongoDB database operations
* JWT authentication
* Frontend-backend integration
* Role-based application functionality
* Environment variable configuration
* Cloud deployment

## 🚀 Future Enhancements

Possible future improvements include:

* 📧 Automated email reminders
* 📱 SMS appointment notifications
* 💳 Online payment integration
* 📅 Calendar integration
* ⭐ Doctor ratings and reviews
* 🧾 Digital prescription management
* 📄 Medical report uploads
* 🔔 Real-time notifications
* 🏥 Hospital/clinic management
* 📊 Doctor analytics dashboard
* 🔐 Two-factor authentication
* 🤖 AI-based doctor recommendation

## 👩‍💻 Author

**Harini Mohankumar**

Computer and Communication Engineering
VSB Engineering College, Karur

## 🔗 Repository

[Doctor Appointment Booking System — GitHub](https://github.com/HARINI-MOHAN-KUMAR/Doctor_Appointment_Booking_System?utm_source=chatgpt.com)

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
