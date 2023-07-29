import { MongoClient } from "mongodb";

const dbConnect = async () => {
  // Check if the connection already exists
  if (dbConnect.client) {
    return;
  }

  try {
    // Replace the connection string with your specific MongoDB driver link
    const uri = "mongodb+srv://pcbuilder:zgAZH1P1E6305L70@cluster0.dgoei.mongodb.net/pc-builder";

    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Save the client instance to reuse the connection
    dbConnect.client = client;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default dbConnect;
