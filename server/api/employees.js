import express from 'express'

const router = express.Router()

// Get list of employees
router.get('/', function(req, res) {
  let sql = `SELECT * FROM Employees`;
	console.log(db)
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
	  console.log(data)
  })
});

export default router
