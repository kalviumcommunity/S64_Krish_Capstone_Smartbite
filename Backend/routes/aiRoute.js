import express from 'express';
import dotenv from 'dotenv';
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

dotenv.config();
const router = express.Router();

router.post('/autocomplete', async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = new ChatOpenAI({
      temperature: 0.7,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    const response = await model.call([
      new HumanMessage(`Suggest some food dishes or snacks for: ${prompt}`)
    ]);

    res.json({
      success: true,
      suggestion: response.content.trim()
    });
  } catch (error) {
    console.error("LangChain error:", error);
    res.status(500).json({ success: false, message: "AI Error" });
  }
});

export default router;
