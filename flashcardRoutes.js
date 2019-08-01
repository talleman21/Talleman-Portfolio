const ObjectId = require('mongodb').ObjectId
const MongoClient = require('mongodb').MongocClient
const bcrypt = require('bcrypt')

module.exports = (app, db, client) => {
  let currentUser;

  app.route('/user')
    .post(function (req, res) {
      let dbInsert = {
        username: req.body.username,
        password: req.body.psw,
        addition_numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        subtraction_numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        multiplication_numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        division_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        addition_lock: 'false',
        subtraction_lock: 'false',
        multiplication_lock: 'false',
        division_lock: 'false'
      }

      db.collection('Flashcard_Users').findOne({ username: { "$regex": "^" + req.body.username + "\\b", "$options": "i" } }, function (err, result) {
        if (!result) {
          bcrypt.hash(req.body.psw, 12, function (err, hash) {
            dbInsert.password = hash
            db.collection('Flashcard_Users').insertOne(dbInsert, function (err, doc) {
              currentUser = doc.ops[0].username
              res.send(doc.ops[0].username)
            })
          })
        } else {
          res.send('username already exists')
        }
      })

    })

  app.route('/flashcards/getuser')
    .post(function (req, res) {
      db.collection('Flashcard_Users').findOne({ username: { "$regex": "^" + req.body.username + "\\b", "$options": "i" } }, function (err, doc) {
        if (doc) {
          bcrypt.compare(req.body.psw, doc.password, function (err, hashRes) {
            if (hashRes == true) {
              currentUser = doc.username
              res.send({
                username: doc.username,
                addition_numbers: doc.addition_numbers,
                addition_lock: doc.addition_lock,
                subtraction_numbers: doc.subtraction_numbers,
                subtraction_lock: doc.subtraction_lock,
                multiplication_numbers: doc.multiplication_numbers,
                multiplication_lock: doc.multiplication_lock,
                division_numbers: doc.division_numbers,
                division_lock: doc.division_lock
              })
            } else {
              res.send('incorrect password')
            }
          })

        } else {
          res.send('user not found')
        }
      })
    })


  app.route('/flashcards/settings')
    .post(function (req, res) {
      console.log(req.body)
      let addition_lock;
      let subtraction_lock;
      let multiplication_lock;
      let division_lock;

      if (!req.body.addition_lock) {
        addition_lock = 'false'
      } else {
        addition_lock = 'true'
      }
      if (!req.body.subtraction_lock) {
        subtraction_lock = 'false'
      } else {
        subtraction_lock = 'true'
      }
      if (!req.body.multiplication_lock) {
        multiplication_lock = 'false'
      } else {
        multiplication_lock = 'true'
      }
      if (!req.body.division_lock) {
        division_lock = 'false'
      } else {
        division_lock = 'true'
      }

      db.collection('Flashcard_Users').findOneAndUpdate({ username: currentUser },
        {
          $set: {
            addition_numbers: req.body.addition_numbers.split(','),
            addition_lock: addition_lock,
            subtraction_numbers: req.body.subtraction_numbers.split(','),
            subtraction_lock: subtraction_lock,
            multiplication_numbers: req.body.multiplication_numbers.split(','),
            multiplication_lock: multiplication_lock,
            division_numbers: req.body.division_numbers.split(','),
            division_lock: division_lock,
          }
        }, { upsert: false, returnOriginal: false }, function (err, doc) {
          if (doc) {
            console.log(doc)
            res.send({
              username: doc.value.username,
              addition_numbers: doc.value.addition_numbers,
              addition_lock: doc.value.addition_lock,
              subtraction_numbers: doc.value.subtraction_numbers,
              subtraction_lock: doc.value.subtraction_lock,
              multiplication_numbers: doc.value.multiplication_numbers,
              multiplication_lock: doc.value.multiplication_lock,
              division_numbers: doc.value.division_numbers,
              division_lock: doc.value.division_lock
            })
          } else {
            res.send('user not found')
          }
        })
    })
}