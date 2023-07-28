const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/chats', (req, res) => {
  console.log('Received chat:', req.body);
  res.json({ message: 'Chat received successfully.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));