// const express = require('express');
// const app = express();
// const port = 3000;
// const pool = require('./db');

// app.use(express.json());
// const cors = require("cors");
// app.use(cors());

// app.post("/pay", async (req, res) => {
//   try {
//     const { email, card_number, expiration_date, security_code, name_on_card } = req.body;

//     const addPayInfo = await pool.query(
//       "INSERT INTO payment_info (email, card_number, expiration_date, security_code, name_on_card) VALUES ($1, $2, $3, $4, $5) RETURNING *",
//       [email, card_number, expiration_date, security_code, name_on_card]
//     );

//     res.json(addPayInfo.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "An error occurred while processing the payment." });
//   }
// });

// app.listen(port, () => {
//   console.log("Server has been started on port", port);
// });

const express = require('express');
const app = express();
const port = 3000;
const pool = require('./db');

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.post('/pay', async (req, res) => {
  try {
    const { email, card_number, expiration_date, security_code, name_on_card } = req.body;

    const addPayInfo = await pool.query(
      'INSERT INTO payment_info (email, card_number, expiration_date, security_code, name_on_card) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, card_number, expiration_date, security_code, name_on_card]
    );

    res.json(addPayInfo.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
  }
});

app.listen(port, () => {
  console.log('Server has been started on port', port);
});
