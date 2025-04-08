function generateToken(user) {
    const jsonString = JSON.stringify(user);
    const token = btoa(jsonString);
    return token;
}

function verifyToken(token) {
    try {
        const jsonString = atob(token);
        const user = JSON.parse(jsonString);
        return user;
    } catch (error) {
        console.error("Invalid token :", error);
        return null;
    }
}

// Exemple d'utilisation
const user = {
    username: "alice",
    email: "alice@example.com"
};

const token = generateToken(user);
console.log("Generated Token:", token);

const decodedUser = verifyToken(token);
console.log("Decoded User:", decodedUser);

