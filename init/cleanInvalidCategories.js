const mongoose = require('mongoose');
const Listing = require('../models/listing');

const validCategories = [
  'Trending', 'Rooms', 'Iconic Cities', 'Mountains', 'Castles', 'Amazing Pools', 'Camping', 'Farms', 'Arctic', 'Boats', 'Photography', 'Services'
];

async function cleanInvalidCategories() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/majorproject');
    const result = await Listing.deleteMany({ category: { $nin: validCategories } });
    console.log(`Deleted ${result.deletedCount} listings with invalid categories.`);
    await mongoose.disconnect();
  } catch (err) {
    console.error('Error cleaning invalid categories:', err);
    process.exit(1);
  }
}

cleanInvalidCategories(); 