const port = process.env.PORT || 3000;
const cors = require('cors');
const express = require('express');
const app = express();
//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri =
  'mongodb+srv://lena_89:oskar025@cluster0.pogrjwc.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create a collection of documents
    const dogCollections = client.db('DogInventory').collection('dogs');

    //insert dog to the db: post method
    app.post('/upload-dog', async (req, res) => {
      const data = req.body;
      const result = await dogCollections.insertOne(data);
      res.send(result);
    });

    //get all dogs from database
    /*app.get('/all-dogs', async (req, res) => {
      const dogs = dogCollections.find();
      const result = await dogs.toArray();
      res.send(result);
    });*/

    app.patch('/dog/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const updateDogData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            ...updateDogData,
          },
        };

        const result = await dogCollections.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
          return res.status(404).json({ error: 'Dog not found' });
        }

        res.json({ message: 'Dog updated successfully' });
      } catch (error) {
        console.error('Error updating dog:', error);
        res.status(500).json({ error: 'Failed to update dog' });
      }
    });
    //delete dog data
    app.delete('/dog/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await dogCollections.deleteOne(filter);
      res.send(result);
    });

    //find by gender
    app.get('/all-dogs', async (req, res) => {
      let query = {};
      if (req.query?.gender) {
        query = { gender: req.query.gender };
      }
      const result = await dogCollections.find(query).toArray();
      res.send(result);
    });

    //to get single dog data

    app.get('/dog/:id', async (req, res) => {
      try {
        const id = req.params.id;
        console.log('Received id:', id);
        const filter = { _id: new ObjectId(id) };
        const result = await dogCollections.findOne(filter);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
