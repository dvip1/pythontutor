"use server"
import {
    GoogleGenerativeAI,
} from "@google/generative-ai";

const setup = () => {
    const apiKey = process.env.GEMINI_API;
    if (!apiKey) return;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-8b",
    });
    return model;
}

export default setup;