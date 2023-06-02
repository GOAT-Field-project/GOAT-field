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


//middleware

const port = 5151;
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

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/ser", require("./routes/serviceProvider"));

app.get("/getbookings/:selectedDate", (req, res) => {
  const selectedDate = new Date(req.params.selectedDate);
  const selectedUTCDate = new Date(
    selectedDate.getUTCFullYear(),
    selectedDate.getUTCMonth(),
    selectedDate.getUTCDate()
  );

  pool.query(
    "SELECT * FROM bookings WHERE date::date = DATE($1)",
    [selectedUTCDate],
    (error, result) => {
      if (error) {
        console.error("Error executing query:", error);
        res.status(500).send("Internal Server Error");
      } else {
        const bookings = result.rows;
        console.log(bookings);
        res.json(bookings);
      }
    }
  );



app.post("/bookings", (req, res) => {
  const { date, time, name, phone } = req.body;

  // Check if the desired date and time slot is available
  pool.query(
    "SELECT * FROM bookings WHERE date = $1 AND time = $2",
    [date, time],
    (error, result) => {
      if (error) {
        console.error("Error executing query:", error);
        res.status(500).send("Internal Server Error");
      } else {
        const existingBooking = result.rows[0];
        console.log(existingBooking);
        // If a booking already exists for the same date and time, send an error response
        if (existingBooking) {
          res
            .status(400)
            .send(
              "The selected date and time are already booked.",
              existingBooking
            );
        } else {
          // Insert the new booking into the table
          const query =
            "INSERT INTO bookings (date, time, name, phone) VALUES ($1, $2, $3, $4)";
          pool.query(
            query,
            [date, time, name, phone || null],
            (error, result) => {
              if (error) {
                console.error(
                  "Error inserting data into the bookings table:",
                  error
                );
                res
                  .status(500)
                  .send("Error inserting data into the bookings table");
              } else {
                console.log("Form data inserted successfully!");
                res.sendStatus(200);
              }
            }
          );
        }
      }
    }
  );
});
app.listen(port, () => {
  console.log('Server has been started on port', port);
});
