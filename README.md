<img width="799" height="168" alt="image" src="https://github.com/user-attachments/assets/d7821115-5c76-4af2-9829-e2945d0f2f93" /># 💼 Expense Tracker Project

A robust full-stack **MERN** application that empowers users to manage their finances with ease. This project provides a user-friendly interface for tracking income and expenses, viewing visual analytics, exporting data to Excel, and maintaining a secure and responsive platform.

---

## 🌐 Live Demo

* 🔗 **Frontend (Vercel):** [Visit Live App](https://vercel-frontend-wine-five.vercel.app/login)
* 🟣 **Backend (Render):** [View API Server](https://expense-tracker-54iz.onrender.com)

---

## 🛠 Tech Stack

### Frontend

* **React** with **Vite** for lightning-fast development
* **Tailwind CSS** for clean and responsive UI
* **Axios** for HTTP communication
* **Recharts** for intuitive data visualization

### Backend

* **Node.js** with **Express.js** for RESTful APIs
* **MongoDB Atlas** and **Mongoose** for flexible data storage
* **JWT** for secure authentication
* **Multer** for handling file uploads
* **xlsx** for dynamic Excel export capabilities

---

## 🧾 Features

* 🔐 Secure login and registration using JWT
* 👤 Role-based user access
* ➕ Add, view, and delete income and expense entries
* 📊 Visual dashboards with interactive charts
* 📁 Download expense and income records in Excel format
* 🖼 Upload and store user profile images
* 🌐 Fully responsive design suitable for all devices

---

## 📁 Folder Structure

```
Expense-Tracker-Project/
├── backend/       # Express.js API and MongoDB integration
├── frontend/      # React + Vite application
└── README.md      # Project documentation
```

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Nakul-nvm/Expense-Tracker-Project.git
cd Expense-Tracker-Project
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder with the following keys:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=8000
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend folder:

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Run the development server:

```bash
npm run dev
```

---

## ☁ Deployment

* **Frontend** hosted on [Vercel](https://vercel.com/)
* **Backend** deployed via [Render](https://render.com/)
* **MongoDB Atlas** used for cloud database services

---

## 👨‍💻 Author

Developed by **Nakul**
📌 [GitHub Profile](https://github.com/Nakul-nvm)

---

---
