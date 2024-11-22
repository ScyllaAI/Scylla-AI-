const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  // Simple AI logic - could be expanded with real AI integration
  const responses = {
    hello: "Hello! I'm Scylla AI. How can I assist you today?",
    project: "I can help you with project creation, listing, and job applications.",
    help: "You can ask me about available projects, how to create one, or how to apply for a project."
  };

  const response = responses[message.toLowerCase()] || "Sorry, I didn't understand that. Can you please rephrase?";
  
  res.json({ response });
});

module.exports = router;