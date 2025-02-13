import connect from '../config/db.config.js';
import { ObjectId } from 'mongodb';
import { userModelGU, userModelC } from '../models/user.model.js';

const db = await connect();
const userCollection = db.collection('Users');

export async function getAllUsers() {
    try {
        const usersData = await userCollection.find().toArray();
        if (usersData.length === 0) {
            return { message: 'No users found' };
        } else {
            const users = usersData.map(userModelGU);
            return users;
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function getUserById(id) {
    try {
        const userData = await userCollection.findOne({ _id: ObjectId.createFromHexString(id) });
        if (!userData) {
            return { message: 'No user found' };
        } else {
            return userModelGU(userData);
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

export async function createUser(userData) {
    try {
        const userCreated = await userCollection.insertOne(userModelC(userData));
        if (userCreated.insertedCount === 0) {
            return { message: 'User creation failed', status: false };
        }
        return { message: 'User created successfully', status: true };
    } catch (error) {
        console.log('Error creating a new user:', error);
        throw error;
    }
}

export async function updateUser(userData) {
    try {
        const user = await userCollection.findOne({ _id: ObjectId.createFromHexString(userData.id) });
        if (!user) {
            return { message: 'User does not exist', status: false };
        }
        const result = await userCollection.updateOne({ _id: user._id }, { $set: userModelC(userData) });
        if (result.modifiedCount === 0) {
            return { message: 'No changes made', status: false };
        }
        return { message: 'User updated successfully', status: true };
    } catch (error) {
        console.log('Error updating user:', error);
        throw error;
    }
}

export async function deleteUser(id) {
    try {
        const user = await userCollection.findOne({ _id: ObjectId.createFromHexString(id) });
        if (!user) {
            return { message: 'User does not exist', status: false };
        }
        const result = await userCollection.deleteOne({ _id: user._id });
        if (result.deletedCount === 0) {
            return { message: 'User deletion failed', status: false };
        }
        return { message: 'User deleted successfully', status: true };
    } catch (error) {
        console.log('Error deleting user:', error);
        throw error;
    }
}