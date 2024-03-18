const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid data format. Data should be an array.' });
  }

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];
  const userId = '';
  const email = '';
  const rollNumber = '';

  data.forEach(item => {
    if (typeof item === 'number') {
      if (item % 2 === 0) {
        evenNumbers.push(`${item}`);
      } else {
        oddNumbers.push(`${item}`);
      }
    } else if (typeof item === 'string') {
      if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        return res.status(400).json({ error: 'Invalid data format. Data should contain only numbers and alphabets.' });
      }
    } else {
      return res.status(400).json({ error: 'Invalid data format. Data should contain only numbers and alphabets.' });
    }
  });

  const user = {
    user_id: `john_doe_17091999`,
    email: `john@xyz.com`,
    roll_number: `ABCD123`,
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets
  };

  res.json({ is_success: true, ...user });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});