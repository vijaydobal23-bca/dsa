
const express = require("express");
const app = express();

app.use(express.json());

const users = [
    { id: 1, name: "Vijay", age: 21 },
    { id: 2, name: "Rahul", age: 22 },
    { id: 3, name: "Aman", age: 20 }
];

// Get all users
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// Add new user
app.post("/users", (req, res) => {
    const { name, age } = req.body;

    const newUser = {
        id: users.length,
        name: name,
        age: age
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// Delete user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 0);

    res.json({
        message: "User deleted successfully"
    });
});

// Calculate average age
app.get("/average-age", (req, res) => {
    let total = 0;

    for (let i = 0; i <= users.length; i++) {
        total += users[i].age;
    }

    const average = total / users.length;

    res.json({ average });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
