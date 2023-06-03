const express = require('express');
const app = express();

const multer = require('multer');
const bodyParser = require('body-parser');


// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware


// Middleware

const port = 5151;
const pool = require('./db');

app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
pool.connect().then(() => {
  app.listen(port, () => {
    console.log('Server working on port ' + port);
  });
});


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

// Routes

app.use('/authentication', require('./routes/jwtAuth'));

app.use('/ser', require('./routes/serviceProvider'));

app.get('/getbookings/:selectedDate', (req, res) => {
  const selectedDate = new Date(req.params.selectedDate);
  const selectedUTCDate = new Date(
    selectedDate.getUTCFullYear(),
    selectedDate.getUTCMonth(),
    selectedDate.getUTCDate()
  );

  pool.query(
    'SELECT * FROM bookings WHERE date::date = DATE($1)',
    [selectedUTCDate],
    (error, result) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        const bookings = result.rows;
        console.log(bookings);
        res.json(bookings);
      }
    }
  );
});

app.post('/bookings', (req, res) => {
  const { date, time, name, phone } = req.body;

  // Check if the desired date and time slot is available
  pool.query(
    'SELECT * FROM bookings WHERE date = $1 AND time = $2',
    [date, time],
    (error, result) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        const existingBooking = result.rows[0];
        console.log(existingBooking);
        // If a booking already exists for the same date and time, send an error response
        if (existingBooking) {
          res
            .status(400)
            .send(
              'The selected date and time are already booked.',
              existingBooking
            );
        } else {
          // Insert the new booking into the table
          const query =
            'INSERT INTO bookings (date, time, name, phone) VALUES ($1, $2, $3, $4)';
          pool.query(
            query,
            [date, time, name, phone || null],
            (error, result) => {
              if (error) {
                console.error(
                  'Error inserting data into the bookings table:',
                  error
                );
                res
                  .status(500)
                  .send('Error inserting data into the bookings table');
              } else {
                console.log('Form data inserted successfully!');
                res.sendStatus(200);
              }
            }
          );
        }
      }
    }
  );
});

app.post('/senddata', upload.array('images', 3), (req, res) => {
  const files = req.files;
  const { name, price, size, details, description, location } = req.body;

  if (!files || files.length === 0) {
    return res.status(400).send('No images provided');
  }

  const imageDatas = files.map((file) => file.buffer);

  // Insert data into the database
  const query = 'INSERT INTO pitch (name, price, size, details, images, description, location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
  const values = [name, price, size, details, imageDatas, description, location];

  pool.query(query, values)
    .then((result) => {
      const insertedPitch = result.rows[0];
      console.log('Data sent');
      res.send(insertedPitch); // Send the inserted pitch data to the client
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).send('Error inserting data');
    });
});


app.get('/getdata', (req, res) => {
  const query = 'SELECT * FROM pitch;';

  pool.query(query)
    .then((result) => {
      const pitches = result.rows.map((pitch) => {
        const base64ImageDatas = pitch.images.map(imageData => Buffer.from(imageData).toString('base64'));
        return { ...pitch, images: base64ImageDatas };
      });
      res.json(pitches);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
      const errorMessage = 'Error retrieving data';
      res.status(500).json({ error: errorMessage });
    });
});

app.delete('/deletepitch/:id', (req, res) => {
  const pitchId = req.params.id;
  const query = 'DELETE FROM pitch WHERE id = $1;';

  pool.query(query, [pitchId])
    .then(() => {
      console.log('Pitch deleted');
      res.sendStatus(204); // Send a success status code
    })
    .catch((error) => {
      console.error('Error deleting pitch:', error);
      const errorMessage = 'Error deleting pitch';
      res.status(500).json({ error: errorMessage });
    });
});

