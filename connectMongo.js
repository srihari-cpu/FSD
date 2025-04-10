// server.js

const { MongoClient } = require("mongodb");

// MongoDB connection details
const url = "mongodb://localhost:27017/";
const dbName = "deepak";
const client = new MongoClient(url);

async function run() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("myCollection");

    // Insert a document
    const insertResult = await collection.insertOne({ name: "example" });
    console.log("📥 Inserted document:", insertResult);

    // Find and display all documents
    const findResult = await collection.find({}).toArray();
    console.log("🔍 Found documents:", findResult);
  } catch (err) {
    console.error("❌ An error occurred:", err);
  } finally {
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}

// Execute the function
run().catch(console.dir);
