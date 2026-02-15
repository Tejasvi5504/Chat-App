# 💬 Real-Time Chat Application

A modern, real-time chat application built with React, Node.js, Socket.IO, and MongoDB. Features include user authentication, real-time messaging, online user status, and profile management.

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- 💬 **Real-time Messaging** - Instant messaging with Socket.IO
- 👥 **Online Users** - See who's currently online
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🖼️ **Profile Pictures** - Upload and manage profile images
- 🔄 **Auto Reconnection** - Automatic socket reconnection on network issues
- 🍪 **Persistent Sessions** - Stay logged in across browser sessions
- 🎨 **Modern UI** - Clean and intuitive user interface

## 🛠️ Tech Stack

### Frontend

- **React** - UI framework
- **Zustand** - State management
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Tailwind CSS** - Styling (assumed)

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image upload (assumed)

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Tejasvi5504/Chat-App.git
cd Chat-App
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### 3. Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/chatapp
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# CORS Origin
CORS_ORIGIN=http://localhost:5173
```

### 4. Frontend Setup

```bash
# Open new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install
```

### 5. Start the Application

**Backend (Terminal 1):**

```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**

```bash
cd frontend
npm run dev
```

The application will be available at:

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5001

## 📁 Project Structure

```
Chat-App/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   │   ├── db.js
│   │   │   └── socket.js
│   │   └── index.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── store/
│   │   │   └── useAuthStore.js
│   │   ├── lib/
│   │   └── pages/
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /signup` - Register new user
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /check` - Check authentication status
- `PUT /update-profile` - Update user profile

### Message Routes (`/api/messages`)

- `GET /users` - Get all users
- `GET /:id` - Get messages with specific user
- `POST /send/:id` - Send message to user

## 🔌 Socket.IO Events

### Client to Server

- `setup` - Initialize user socket connection
- `join_chat` - Join a chat room
- `new_message` - Send new message
- `typing` - User typing indicator

### Server to Client

- `connected` - Socket connection established
- `online_users` - List of online users
- `message_received` - New message received
- `typing` - Someone is typing

## 🚀 Deployment

### Backend Deployment (Railway/Render/Heroku)

1. Create account on your preferred platform
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update API URLs to point to your deployed backend

## 🐛 Troubleshooting

### Common Issues

**Socket connection fails:**

- Check if backend is running on port 5001
- Verify CORS settings in backend
- Check firewall settings

**Database connection error:**

- Verify MongoDB is running
- Check MONGODB_URI in .env file
- Ensure network access (for MongoDB Atlas)

**Authentication issues:**

- Check JWT_SECRET in .env
- Clear browser cookies
- Verify API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tejasvi**

- GitHub: [@Tejasvi5504](https://github.com/Tejasvi5504)

## 🙏 Acknowledgments

- React team for the amazing framework
- Socket.IO for real-time communication
- MongoDB for the database
- All open-source contributors

---

## 📱 Screenshots

_Add screenshots of your application here_

## 🔄 Future Enhancements

- [ ] Group chat functionality
- [ ] File sharing
- [ ] Voice messages
- [ ] Message encryption
- [ ] Dark/Light theme toggle
- [ ] Message search
- [ ] Emoji reactions
- [ ] Push notifications
<!-- Hi TesjasWi How uh doin -->
Hi This is Omm 
