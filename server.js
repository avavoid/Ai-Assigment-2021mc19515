// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  const { userInput } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `LibraryChatBot: ${userInput}`,
      max_tokens: 150,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
    });

    res.json(response.data.choices[0].text.trim());
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
