import express, { json } from 'express';
import { DataAPIClient } from '@datastax/astra-db-ts';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
app.use(cors({
  origin: 'https://hardware-store-bice.vercel.app'
}));

const PORT = process.env.PORT || 3000;

// Initialize the Astra DB client
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_ENDPOINT);

// Middleware to parse JSON bodies
app.use(json());

// API routes remain the same...


// API 1: Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const collection = await db.collection('pvc');
    const cursor = await collection.find({}, { limit: 100, includeSimilarity: true });
    const results = [];
    
    for await (const doc of cursor) {
      results.push(doc);
    }
    
    res.json(results);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ error: "An error occurred while fetching products" });
  }
});

// API 2: Fetch top 20 similar products based on input query
app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const collection = await db.collection('pvc');
    const cursor = await collection.find(
      {},
      {
        sort: { $vectorize: query }, // Sorting based on vector similarity to the input query
        limit: 20,                   // Limit to top 20 results
        includeSimilarity: true,     // Include similarity scores
      }
    );

    const results = [];
    
    for await (const doc of cursor) {
      results.push(doc);
    }

    res.json(results);
  } catch (error) {
    console.error("Error performing search:", error);
    res.status(500).json({ error: "An error occurred while performing the search" });
  }
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
