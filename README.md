# 💬 Real-time Chat

Una aplicación de chat en tiempo real construida con Node.js, Express, Socket.IO y MongoDB. Permite a los usuarios comunicarse instantáneamente a través de mensajes en tiempo real con autenticación JWT.

## 🚀 Características

- ✅ **Mensajería en tiempo real** usando WebSockets (Socket.IO)
- 🔐 **Autenticación segura** con JWT (JSON Web Tokens)
- 💾 **Base de datos persistente** con MongoDB y Mongoose
- 👥 **Gestión de usuarios** completa (registro, login, perfil)
- 💬 **Sistema de conversaciones** organizadas
- 🏗️ **Arquitectura modular** con separación clara de responsabilidades
- 🔄 **API RESTful** bien estructurada

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js + Express.js
- **Base de datos:** MongoDB + Mongoose
- **Tiempo real:** Socket.IO
- **Autenticación:** JWT (jsonwebtoken)
- **Variables de entorno:** dotenv

## 📁 Estructura del Proyecto

```
Real-time_Chat/
├── index.js                    # Punto de entrada principal
├── package.json               # Dependencias y scripts
├── src/
│   ├── config/
│   │   └── db.config.js       # Configuración de base de datos
│   │   └── config.js          # Configuración general
│   ├── controllers/           # Lógica de controladores
│   │   ├── chat.controller.js
│   │   ├── conversation.controller.js
│   │   └── user.controller.js
│   ├── models/                # Modelos de datos
│   │   ├── chat.model.js
│   │   ├── conversation.model.js
│   │   └── user.model.js
│   ├── routes/                # Definición de rutas API
│   │   ├── chat.routes.js
│   │   ├── conversation.routes.js
│   │   └── user.routes.js
│   ├── services/              # Lógica de negocio
│   │   ├── chats.services.js
│   │   ├── conversations.services.js
│   │   └── users.services.js
│   └── websocket/             # Configuración WebSocket
│       ├── handlers.js        # Manejadores de eventos
│       ├── middlewares.js     # Middlewares de autenticación
│       └── server.js          # Servidor WebSocket
└── tests/                     # Directorio de pruebas
```

## 🔧 Instalación

### Prerrequisitos

- **Node.js** (versión 14 o superior)
- **MongoDB** (instalado localmente o conexión remota)
- **npm** o **yarn**

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd Real-time_Chat
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/realtime_chat
   JWT_SECRET=tu_jwt_secret_muy_seguro
   ```

4. **Inicia MongoDB:**
   ```bash
   # Si tienes MongoDB instalado localmente
   mongod
   ```

5. **Ejecuta la aplicación:**
   ```bash
   npm start
   ```

La aplicación estará disponible en `http://localhost:3000`

## 🎯 Uso

### API Endpoints

#### Usuarios
- `POST /users/register` - Registrar nuevo usuario
- `POST /users/login` - Iniciar sesión
- `GET /users/profile` - Obtener perfil del usuario
- `PUT /users/profile` - Actualizar perfil

#### Conversaciones
- `GET /conversations` - Obtener conversaciones del usuario
- `POST /conversations` - Crear nueva conversación
- `GET /conversations/:id` - Obtener conversación específica

#### Chats
- `GET /chats/:conversationId` - Obtener mensajes de una conversación
- `POST /chats` - Enviar nuevo mensaje

### WebSocket Events

#### Cliente → Servidor
- `chat message` - Enviar mensaje en tiempo real

#### Servidor → Cliente
- `chat message` - Recibir mensaje en tiempo real
- `user connected` - Notificación de usuario conectado
- `user disconnected` - Notificación de usuario desconectado

## 🔐 Autenticación

El sistema utiliza JWT para la autenticación. Para acceder a las rutas protegidas:

1. Registra un usuario o inicia sesión
2. Incluye el token JWT en el header `Authorization`:
   ```
   Authorization: Bearer <tu_jwt_token>
   ```

## 🧪 Testing

```bash
npm test
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

**Jairo Freire**

---

## 🚀 Próximas Características

- [ ] Notificaciones push
- [ ] Envío de archivos multimedia
- [ ] Salas de chat temáticas
- [ ] Estado de usuarios (en línea/desconectado)
- [ ] Historial de mensajes paginado
- [ ] Reacciones a mensajes

---

¿Tienes alguna pregunta o sugerencia? ¡No dudes en abrir un issue! 🎉
