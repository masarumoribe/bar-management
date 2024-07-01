const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())

const db = require('./models')

// Routers
const inventoryRouter = require('./routes/InventoryRoutes')
app.use("/inventory", inventoryRouter)
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Sever running on port 3001")
    });
})


