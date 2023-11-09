const express = require('express');
const cors = require('cors');

const { Configuration, OpenAIApi } = require("openai");

const app = express();

// Use cors and body-parser middleware
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY='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';

// Endpoint to receive data from the React app and process it with AI
app.post('/process-data', async (req, res) => {
  console.log('Received request for /process-data');
  const { selectedAnimal, selectedColor, challenge, selectedSkill } = req.body;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: 'You are a great story teller.' },
        { role: 'user', content: `Create a story with a ${selectedAnimal}, color ${selectedColor}, challenge ${challenge}, and skill ${selectedSkill} for a child around 2 to 3 years old in traditional chinese.` },
      ],
    }),
  }
  
  console.log("Sending request to OpenAI...");
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    console.log("Received response from OpenAI");
    
    const data = await response.json();
    console.log("Data received from OpenAI:", data);
    
    res.send(data);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("An error occurred while creating the story.");
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

