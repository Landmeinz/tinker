import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
const router = express.Router();

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  }

  // This is an in memory store for users, there is no data persistence without a proper DB
  router.post('/register', () => {
  
    const email = user.username
    const name = '';
    const password = user.hash;
    const profession = '';
    const interests = '';
    const location = '';
    const activeMember = true;
    const activeDate = user.createdAt;
    const admin = false;
  
    const sqlText = `
      INSERT INTO   "user" 
        ("email", "name", "password", "profession", "interests", "location", "active_date", "active_member", "admin")
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11); `;
  
    let values = [email, name, password, profession, interests, location, activeDate, activeMember, admin]
  
    pool
      .query(sqlText, values)
      .then((response) => {
        res.sendStatus(201);
  
      })
      .catch((error) => {
        console.log(`POST Error  to database: ${sqlText}`, error);
        res.sendStatus(500);
      });
  });

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  return users.find((user) => user.username === username)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}