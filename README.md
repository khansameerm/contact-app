<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

<h1 align="center">📇 Contact Manager API</h1>
<p align="center">
  A secure <b>Node.js + Express + MongoDB</b> backend for managing contacts with <b>JWT Authentication</b> 🔐
</p>

<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

## ✨ Features

- ➕ Create a new contact  
- 📑 View all contacts  
- 🔍 Get a single contact by ID  
- ✏️ Update an existing contact  
- 🗑️ Delete a contact  
- 👤 User registration & login  
- 🔐 JWT authentication for protected routes  
- 🔄 Each user manages **their own contacts only**  

---

## ⚡ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Auth**: JWT & bcrypt  

---

## 🔑 Authentication

- Users must register and log in to receive a JWT token.  
- All contact routes are protected and require the token.  
- Each contact is tied to the logged-in user.  

---

## 📌 API Endpoints

### User Routes
- `POST /api/users/register` – Register new user  
- `POST /api/users/login` – Login and get JWT token  
- `GET /api/users/current` – Get logged-in user info  

### Contact Routes (Protected)
- `GET /api/contacts` – Get all contacts for logged-in user  
- `POST /api/contacts` – Create new contact  
- `GET /api/contacts/:id` – Get contact by ID  
- `PUT /api/contacts/:id` – Update contact  
- `DELETE /api/contacts/:id` – Delete contact  


