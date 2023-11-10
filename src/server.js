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
      model: "gpt-4-1106-preview",
      messages: [
        { role: 'system', content: 'You are a great story teller. Please include a title in your story. It should have 標題: 故事開始:' },
        { role: 'user', content: `Create a story with a ${selectedAnimal}, color ${selectedColor}, challenge ${challenge}, and skill ${selectedSkill} for a child around 2 to 3 years old in traditional chinese. The story should start with the title and be followed by the story.` },
      ],
    }),
  }
  
  console.log("Sending request to OpenAI...");
  
   // After getting the story, create an image prompt and generate an image
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    console.log("Received response from OpenAI");
    
    const data = await response.json();
    console.log("Data received from OpenAI:", data);
      // Send back the story data and the image URL
      res.send(data);

    
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("An error occurred while creating the story.");
  }
});

// New endpoint for image generation
app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body; // The image prompt should be sent from the front-end

  const imageOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model:"dall-e-3",
      prompt: prompt, // The image prompt received from the front end
      n: 1, // Number of images to generate
      size: "1024x1024" // Image size
    }),
  };

  console.log("Sending request to OpenAI for image generation...");

  try {
    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', imageOptions);
    const imageData = await imageResponse.json();
    console.log("Image data received:", imageData);

    // Assuming the image URL is in the response data
    const imageUrl = imageData.data[0].url;
    res.send({ imageUrl: imageUrl }); // Send back only the image URL

  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("Error generating image.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

