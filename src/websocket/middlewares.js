import { jsonwebtoken as jwt } from 'jsonwebtoken';

export const authenticateSocket = (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
        return next(new Error('Authentication error: No token provided'));
    }

    jwt.verify(token, '', (err, decoded) => {
        if (err) {
            return next(new Error('Authentication error: Invalid token'));
        }
        socket.user = decoded; 
        next();
    });
};