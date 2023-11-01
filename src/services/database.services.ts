import { MongoClient, Db, Collection } from "mongodb";
import User from "../models/schemas/User.schema";
import RefreshToken from "../schemas/RefreshToken.schema";

const uri = `mongodb+srv://${process.env.REACT_APP_DB_USERNAME}:${process.env.REACT_APP_DB_PASSWORD}@tweetprojectk18f3.0j8g7fl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class DatabaseService {
  private client: MongoClient;
  private db: Db;
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(`${process.env.REACT_APP_DB_NAME}`);
  }

  async connect() {
    try {
      await this.client.db(`${process.env.REACT_APP_DB_NAME}`).command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get users(): Collection<User> {
  //   return this.db.collection(process.env.DB_COLLECTION_USERS as string);
  // }

  // nếu chưa có collection thì tự tạo mới luôn
  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection(process.env.DB_COLLECTION_REFRESH_TOKENS as string);
  }
}

const databaseService = new DatabaseService();
export default databaseService;
