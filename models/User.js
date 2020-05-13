const db = require('../db')

class User {
  static create (userName, password) {
    const queryText = `INSERT INTO users (username,password)
    VALUES($1,$2,$3);`
    return db.query(queryText, [userName, password])
  }

  static getByUserName (userName) {
    const queryText = 'SELECT * FROM users where username = $1'
    return db.query(queryText, [userName]).then((data) => data.rows[0])
  }

  static getById (userId) {
    const queryText = 'SELECT * FROM users where user_id = $1'
    return db.query(queryText, [userId]).then((data) => data.rows[0])
  }
}

module.exports = User
