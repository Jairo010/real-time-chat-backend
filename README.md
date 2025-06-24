# 💬 Real-time Chat

A real-time chat application built with Node.js, Express, Socket.IO, and MongoDB. Allows users to communicate instantly through real-time messages with JWT authentication.

## 🚀 Features

- ✅ **Real-time messaging** using WebSockets (Socket.IO)
- 🔐 **Secure authentication** with JWT (JSON Web Tokens)
- 💾 **Persistent database** with MongoDB and Mongoose
- 👥 **Complete user management** (register, login, profile)
- 💬 **Organized conversation system**
- 🏗️ **Modular architecture** with clear separation of concerns
- 🔄 **Well-structured RESTful API**

## 🛠️ Technologies Used

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Real-time:** Socket.IO
- **Authentication:** JWT (jsonwebtoken)
- **Environment variables:** dotenv

## 📁 Project Structure

```
Real-time_Chat/
├── index.js                    # Main entry point
├── package.json               # Dependencies and scripts
├── src/
│   ├── config/
│   │   └── db.config.js       # Database configuration
│   ├── controllers/           # Controller logic
│   │   ├── chat.controller.js
│   │   ├── conversation.controller.js
│   │   └── user.controller.js
│   ├── models/                # Data models
│   │   ├── chat.model.js
│   │   ├── conversation.model.js
│   │   └── user.model.js
│   ├── routes/                # API route definitions
│   │   ├── chat.routes.js
│   │   ├── conversation.routes.js
│   │   └── user.routes.js
│   ├── services/              # Business logic
│   │   ├── chats.services.js
│   │   ├── conversations.services.js
│   │   └── users.services.js
│   └── websocket/             # WebSocket configuration
│       ├── handlers.js        # Event handlers
│       ├── middlewares.js     # Authentication middlewares
│       └── server.js          # WebSocket server
└── tests/                     # Test directory
```

## 🔧 Installation

### Prerequisites

- **Node.js** (version 14 or higher)
- **MongoDB** (installed locally or remote connection)
- **npm** or **yarn**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Real-time_Chat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   Create a `.env` file in the project root:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/realtime_chat
   JWT_SECRET=your_very_secure_jwt_secret
   ```

4. **Start MongoDB:**
   ```bash
   # If you have MongoDB installed locally
   mongod
   ```

5. **Run the application:**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 🎯 Usage

### API Endpoints

#### Users
- `POST /users/register` - Register new user
- `POST /users/login` - Login
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update profile

#### Conversations
- `GET /conversations` - Get user conversations
- `POST /conversations` - Create new conversation
- `GET /conversations/:id` - Get specific conversation

#### Chats
- `GET /chats/:conversationId` - Get messages from a conversation
- `POST /chats` - Send new message

### WebSocket Events

#### Client → Server
- `chat message` - Send real-time message

#### Server → Client
- `chat message` - Receive real-time message
- `user connected` - User connected notification
- `user disconnected` - User disconnected notification

## 🔐 Authentication

The system uses JWT for authentication. To access protected routes:

1. Register a user or login
2. Include the JWT token in the `Authorization` header:
   ```
   Authorization: Bearer <your_jwt_token>
   ```

## 🧪 Testing

```bash
npm test
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 🚀 Upcoming Features

- [ ] Push notifications
- [ ] Multimedia file sharing
- [ ] Themed chat rooms
- [ ] User status (online/offline)
- [ ] Paginated message history
- [ ] Message reactions

---

Got any questions or suggestions? Feel free to open an issue! 🎉
