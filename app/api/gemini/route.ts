import { NextResponse } from "next/server";
import setup from "@/config/geminiConfig";

export async function POST(req: Request) {
    try {
        const requestData = await req.json();
        const model = setup();
        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
        };
        const chatSession = model?.startChat({
            generationConfig,
        })
        const result = await chatSession?.sendMessage(JSON.stringify(requestData));
        const responseText = result?.response?.text();

        if (responseText) { // Check if responseText exists before sending
            return NextResponse.json({
                message: responseText, // Send only the text
                success: true,
            }, { status: 200 });
        } else {
            console.error("No text found in the response.");
            return NextResponse.json({
                message: "No response received from the model.",
                success: false,
            }, { status: 500 }); // Or another appropriate status code
        }
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                message: "server error occured",
                error: err,
                success: false
            }, { status: 500 })
    }
}