"use client"
import React, { useEffect } from "react";
import { isValid } from "./isValid"
import { notFound } from "next/navigation";
import axios from "axios";
import { Introduction } from "./lessonData";
import { LessonPages } from "@/components/quetionpage";
import { useState } from "react";
import Link from "next/link";

interface Statement {
    statement1?: string;
    statement2?: string;
    statement3?: string;
    statement4?: string;
    statement5?: string;
}
interface MessageData {
    statements: Statement[];
    message: string;
    name: string;
    age: string;
    likeToDo: string;
    animal: string;
}
interface ApiResponse {
    message: string;
    success: boolean;
}

type PageParams = { slug: string };
export default function Page({ params }: { params: Promise<PageParams> }) {
    const [messages, setMessages] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const unwrappedSlug = React.use(params)

    const handleNext = () => {
        setIndex(prev => prev + 1)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post<ApiResponse>("/api/gemini", Introduction, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const parsedData: MessageData = JSON.parse(response.data.message);

                if (parsedData.statements && Array.isArray(parsedData.statements)) {
                    const extractedMessages = parsedData.statements.map(statementObj => {
                        return Object.values(statementObj)[0] || '';
                    }).filter(message => message !== '');

                    setMessages(extractedMessages);
                }

                setIsLoading(false);
            }
            catch (error) {
                console.error("Error occured while fetching data", error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    if (isLoading)
        return <>Loading.. Please wait</>
    if (!isValid(unwrappedSlug.slug) && !isLoading)
        notFound();
    if (Introduction.index > index && !isLoading) {
        return <LessonPages onNext={handleNext} index={index} total={Introduction.index} question={messages[index]} />
    }
    else
        return (
            <>
                <h1> THat one was one demo that I managed to make in 3 hours!! using nextjs(server + frontend)</h1>
                <br />
                <Link href="/">go back to home</Link>
                <br />
                <p>TO check this lesson again, do a refresh! </p>
                <p>Here my github link: <Link href="https://github.com">github</Link></p>
                <p>Here the projects link: <Link href="https://github.com/dvip1/pythontutor">pythontutor</Link></p>
                <p>here is my another hosted project:  <Link href="https://github.com/dvip1/qualityReads">qualityReads</Link></p>
                <p><strong>My Resume:</strong> <Link href="https://docs.google.com/document/d/1X4CWfAnt2v9La3k_swj-2HKR8qXvDB3Y/edit?usp=sharing&ouid=103931453225068697144&rtpof=true&sd=true">link</Link></p>

            </>
        )
}