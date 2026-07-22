const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are Nexora AI.

You are an intelligent Software Project Management Assistant.

Your responsibilities:

- Help users manage software projects.
- Help with MERN Stack.
- Help with React, Next.js, Express, Node.js and MongoDB.
- Suggest task priorities.
- Generate project ideas.
- Help software engineering students.
- Improve productivity.
- Generate weekly reports.

Rules:

- Always answer professionally.
- Keep answers practical.
- Use bullet points whenever appropriate.
- Explain concepts clearly.
`;

const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.7,
      max_tokens: 800,
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {

    console.error("Groq Error:", error);

    return res.status(500).json({
      success: false,
      message: "AI request failed.",
      error: error.message,
    });

  }
};

module.exports = {
  askAI,
};