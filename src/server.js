const express = require('express');
const cors = require('cors');
require('dotenv').config();
// Initialize OpenAI SDK
const { OpenAI } = require('openai');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const speechFile = path.resolve("./speech.mp3");


app.post('/process-story-and-image', async (req, res) => {
  console.log("Get the post request")
    try {
        const { selectedAnimal, selectedColor, challenge, selectedSkill } = req.body;

        // Validate input
        if (!selectedAnimal || !selectedColor || !challenge || !selectedSkill) {
            return res.status(400).send('Missing required fields');
        }

      // Story generation using OpenAI SDK - using a chat model
      const storyResponse = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
            { role: 'system', content: 'You are a great story teller. Please include a title in your story. It should have 標題: 故事開始:' },
            { role: 'user', content: `Create a story with a ${selectedAnimal}, color ${selectedColor}, challenge ${challenge}, and skill ${selectedSkill} for a child around 2 to 3 years old in traditional Chinese. The story should start with the title and be followed by the story.` },
        ],
      });

        // Image generation using OpenAI SDK
        const imageResponse = await openai.images.generate({
            prompt: `Illustration a charming ${selectedAnimal} in ${selectedColor}. This animal is facing a whimsical challenge of ${challenge} and is seeking to learn or use the skill of ${selectedSkill}. The scene should be simple yet colorful, suitable for children aged 2 to 3 years old. The style should be cartoonish with exaggerated features for clear emotional and action cues. Please infuse the illustration with dreamy and magical elements, like sparkling stars, colorful bubbles, or a mystical backdrop. Ensure there are no words in the illustration.`,
            n: 1,
            size: "1792x1024",
            model: "dall-e-3",
        });

        // Extract the story text
        const storyText = storyResponse.choices[0].message.content;

        // Generate audio from the story text
        const mp3Response = await openai.audio.speech.create({
            model: "tts-1",
            voice: "nova",
            input: storyText,
            speed: "1",
        });

        console.log(speechFile);
        const buffer = Buffer.from(await mp3Response.arrayBuffer());
        await fs.promises.writeFile(speechFile, buffer);

        // Send back the story data and the image URL
        res.send({ 
            story: storyResponse.choices[0].message.content, 
            imageUrl: imageResponse.data[0].url // Adjust this based on the structure of the response
        });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("An error occurred while processing the request.");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
