import mongoose from "mongoose";

async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
    });
    console.log(
      `Successfully connected to ${connection.name} database at ${connection.host}`
    );
  } catch (err) {
    console.log("Database initial connection failed", err);
    process.exit(1);
  }
  mongoose.connection.on("error", (err) => {
    console.log("Database connection error:", err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
}

export default connectDB;
