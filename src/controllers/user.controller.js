import { getAllUsers, getUserById, createUser, updateUser, deleteUser} from '../services/users.services.js'

export async function createUsers(req, res)  {
    const userData = req.body;
    try {
        const user = await createUser(userData);
        if (!user.status) {
            res.status(404).json(user);
        } else {
            res.status(201).json(user)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

export async function getUsers(req, res) {
    try {
        const users = await getAllUsers();
        if (!users.status) {
            res.status(404).json(users);
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

export async function getUser(req, res) {
    const userId = req.body.id;
    try {
        const user = await getUserById(userId);
        if (!user.status) {
            res.status(404).json(user);
        } else {
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
};

export async function updatedUsers(req, res) {
    const userData = req.body;
    try {
        const user = await updateUser(userData);
        if (!user.status) {
            res.status(404).json(user)
        } else {
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

export async function deleteUsers(req, res) {
    const userId = req.body.id;
    try {
        const user = await deleteUser(userId);
        if (!user.status) {
            res.status(404).json(user);
        } else {
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};