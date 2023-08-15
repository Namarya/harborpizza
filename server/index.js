const express = require("express");
// const enforce = require("express-sslify");

const path = require("path");
const db = require("./db.js");

const app = express();
// app.use(enforce.HTTPS({ trustProtoHeader: true }));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
const stripeWebhook = require("./stripeWebhook.js");
app.use("/api/stripe/hook/", stripeWebhook);

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute.js");
const userRoute = require("./routes/userRoute.js");
const ordersRoute = require("./routes/ordersRoute.js");
const stripeRoute = require("./routes/stripeRoute.js");
const customPizzaRoute = require("./routes/customPizzaRoute.js");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);
app.use("/api/stripe/", stripeRoute);
app.use("/api/custompizza/", customPizzaRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

app.get("/", (req, res) => {
  res.send("Server is working!");
});

const port = process.env.PORT || 5000;

app.listen(port);
