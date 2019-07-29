
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongoUrl = process.env.DATABASE
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./gradebook-build'))
app.use(express.static('./build'))
app.use(express.static('./public'))


console.log(mongoUrl)
MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
  if (err) console.log(err)
  const db = client.db()

  app.get('/', (req, res) => {
    res.send('index.html')
  })

  app.get('/gradebook', (req, res) => {
    res.sendFile(__dirname + '/gradebook-build/gradebook.html')
  })

  app.post('/getdata', (req, res) => {
    let user = req.body.teacher
    db.collection('checklist').find({ teacher: user }).collation({ locale: "en_US", strength: 1 }).toArray((err, result) => {
      if (err) {
        console.log(err)
      }
      if (result[0]) {
        res.send(result[0])
        console.log(result[0])
      } else {
        res.send('no record')
        console.log('no record')
      }
    })
  })

  app.post('/studentSelect', (req, res) => {
    let { student, teacher } = req.body
    console.log(teacher)
    db.collection('checklist').find({ teacher: teacher }, { projection: { students: { $elemMatch: { name: student } } } })
      .collation({ locale: "en_US", strength: 1 })
      .toArray((err, result) => {
        if (err) {
          console.log(err)
        }
        console.log(result)
        if (result[0].hasOwnProperty('students')) {
          res.send(result[0].students[0])
        } else {
          res.send('no record')
        }
      })
  })

  app.post('/newSubject', (req, res) => {
    let { teacher, student, subject } = req.body   //destructuring to simplify the below $push
    db.collection('checklist').updateOne({ 'teacher': teacher },
      { $push: { "students.$[i].subjects": { "subject": subject, "assignments": [] } } },
      {
        arrayFilters: [
          { "i.name": student }
        ]
      });
    res.send(req.body)
  })

  app.post('/newAssignment', (req, res) => {
    let { id, assignment, description, grade, teacher, student, subject } = req.body   //destructuring to simplify the below $push
    db.collection('checklist').updateOne({ 'teacher': teacher },
      { $push: { "students.$[i].subjects.$[j].assignments": { "id": id, "assignment": assignment, "description": description, "grade": grade } } },
      {
        arrayFilters: [
          { "i.name": student },
          { "j.subject": subject }
        ]
      });
    res.send(req.body)
  })

  app.post('/gradeUpdate', (req, res) => {
    let { assignment, subject, grade, student, teacher, id } = req.body   //destructuring to simplify the below $push
    db.collection('checklist').updateOne({ 'teacher': teacher },
      { $set: { "students.$[i].subjects.$[j].assignments.$[k].grade": grade } },
      {
        arrayFilters: [
          { "i.name": student },
          { "j.subject": subject },
          { "k.id": id }
        ]
      });
    res.send(req.body)
  })

  app.post('/removeAssignment', (req, res) => {
    let { id, subject, student, teacher } = req.body   //destructuring to simplify the below $set
    db.collection('checklist').updateOne({ 'teacher': teacher },
      { $set: { "students.$[i].subjects.$[j].assignments.$[k].active": false } },
      {
        arrayFilters: [
          { "i.name": student },
          { "j.subject": subject },
          { "k.id": id }
        ]
      });
    res.send(req.body)
  })

  app.post('/removeSubject', (req, res) => {
    let { subject, student, teacher } = req.body   //destructuring to simplify the below $set
    db.collection('checklist').updateOne({ 'teacher': teacher },
      { $set: { "students.$[i].subjects.$[j].active": false } },
      {
        arrayFilters: [
          { "i.name": student },
          { "j.subject": subject },
        ]
      });
    res.send(req.body)
  })

  app.post('/assignmentChange', (req, res) => {
    let { id, newAssignment, student, teacher, subject } = req.body   //destructuring to simplify the below $set
    db.collection('checklist').updateOne({ 'teacher': teacher },
      { $set: { "students.$[i].subjects.$[j].assignments.$[k].assignment": newAssignment } },
      {
        arrayFilters: [
          { "i.name": student },
          { "j.subject": subject },
          { "k.id": id }
        ]
      });
    res.send(req.body)
  })

})

app.listen(port, () => {
  console.log(`Portfolio is running on port ${port}`)
})