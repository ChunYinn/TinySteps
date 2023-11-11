const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // make sure to install node-fetch if not already installed

const openai = require('openai');
const { Configuration, OpenAIApi } = openai;


const app = express();

// Use cors and body-parser middleware
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY='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';

// Combined endpoint to process story and image
app.post('/process-story-and-image', async (req, res) => {
  console.log('Received request for /process-story-and-image');
  const { selectedAnimal, selectedColor, challenge, selectedSkill } = req.body;

  // Story generation options
  const storyOptions = {
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
  };

  // Image generation options
  const imageOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      prompt: `Cute Story Illustration of ${selectedAnimal} in ${selectedColor} having a challenge of ${challenge} seek for the skill of ${selectedSkill} for the age of 2 to 3 years old child to visualize.`,
      n:1,
    }),
  };

  try {
    // Generate story
    const storyResponse = await fetch('https://api.openai.com/v1/chat/completions', storyOptions);
    const storyData = await storyResponse.json();

    // Generate image
    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', imageOptions);
    const imageData = await imageResponse.json(); // get the JSON response

    console.log('Image Response:', imageData); // log the entire response


    // Send back the story data and the image URL
    res.send({ story: storyData.choices[0].message.content, imageUrl: imageData });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
