export function userModelC(userData) {
    return {
        name: userData.name,
        lastname: userData.lastname,
        username: userData.username,
        email: userData.email,
        password: userData.password,
        createAt: Date.now(),
        isActive: true
    }
}

export function userModelGU(userData) {
    return {
        _id: userData._id,
        name: userData.name,
        lastname: userData.lastname,
        username: userData.username,
        email: userData.email,
        password: userData.password,
        createAt: userData.createAt,
        isActive: userData.isActive
    }
}