const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "myDatabase";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("users");

    // 🔹 CREATE (Insert)
    const insertResult = await collection.insertOne({ name: "Alice", age: 25 });
    console.log("📥 Insert Result:", insertResult);

    // 🔹 READ (Find)
    const findResult = await collection.findOne({ name: "Alice" });
    console.log("🔍 Found Document:", findResult);

    // 🔹 UPDATE
    const updateResult = await collection.updateOne(
      { name: "Alice" },
      { $set: { age: 26 } }
    );
    console.log("✏️ Update Result:", updateResult);

    // 🔹 DELETE
    const deleteResult = await collection.deleteOne({ name: "Alice" });
    console.log("🗑️ Delete Result:", deleteResult);
  } catch (err) {
    console.error("❌ An error occurred:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();
