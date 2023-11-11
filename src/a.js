const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    organization: "org-hwl5O1WJvauQCfxzN1fTfqO0",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

openai.listEngines().then(response => {
    console.log(response.data);
});
