const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const mongoose = require('mongoose');

mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log('Connected to MongoDB');

    // // Check if the collection exists before trying to drop the index
    // const collections = await mongoose.connection.db.listCollections({ name: 'temparyotpverification' }).toArray();
    // const findcollection = await mongoose.connection.db.listCollections().toArray();
    // const collectionExists = collections.some(col => col.name === 'temparyotpverifications');
    // console.log("collectionis",findcollection)

   

})
.catch((err) => console.error('Failed to connect to MongoDB:', err));
