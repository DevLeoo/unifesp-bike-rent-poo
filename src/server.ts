import app from "./main";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bike Rent Service running on port ${PORT}`);
  console.log(`The environment is on --complete--`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(`${new Date().toISOString()}: Unhandled Rejection at: ${reason}`);
});
