const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

type Movie = {
  title: string;
};

async function addFilm(title: string) {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    const movie = { title };
    await movies.insertOne(movie);
    console.log(`Added film: ${title}`);
  } finally {
    await client.close();
  }
}

async function listFilms() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    const moviesList: Movie[] = await movies.find({}).toArray();
    console.log("List of films:");
    moviesList.forEach(movie => {
      console.log(movie.title);
    });
  } finally {
    await client.close();
  }
}

async function run() {
  const command = process.argv[2];
  const arg = process.argv[3];

  if (command === "add") {
    if (!arg) {
      console.error("Please provide a film title to add.");
      return;
    }
    await addFilm(arg);
  } else if (command === "list") {
    await listFilms();
  } else {
    console.error("Invalid command. Usage: node mongo.js [add film-title | list]");
  }
}

run().catch(console.dir);
