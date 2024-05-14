const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const _PORT = process.env.PORT;

// Data Base
const DataBase = require("./config/DB");
DataBase();

// ROUTES
                /*users*/
const usersRoutes = require("./routes/usersRouter");
app.use(usersRoutes);
                /*register*/
const registerRoutes = require("./routes/registerRouter")
app.use(registerRoutes);
                /*login*/
const loginRoutes = require("./routes/loginRouter")
app.use(loginRoutes)

app.listen(_PORT, () => {
    console.log("Connexion successfully:", _PORT);
});
