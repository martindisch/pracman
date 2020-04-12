import { MongoClient, Db } from 'mongodb';

const url = 'mongodb://db:27017';
const dbName = 'pracman';

// Reference to store the DB connection once opened
let db: Db;

/**
 * Attempts connecting to the DB and stores the connection.
 */
const mongoInit = async () => {
  try {
    const client = await MongoClient.connect(url, {
      useUnifiedTopology: true,
    });
    // Store reference to db
    db = client.db(dbName);
  } catch (err) {
    console.log(`Unable to connect to DB: ${err}`);
  }
};

/**
 * Returns the users collection.
 *
 * Opens the DB connection if it doesn't exist yet.
 */
const getUsers = async () => {
  if (!db) {
    await mongoInit();
  }
  return db.collection('users');
};

export default getUsers;
