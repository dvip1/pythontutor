"use client"

import { SetStateAction, useState } from "react"
import { userInformationQuestions } from "@/utils/aboutUser"
import { Progress } from "@heroui/progress";

interface quetionPageInterface {
    keys?: string
    onNext: (answer: string) => void
    index: number
    total: number
    question?: string
}

const FillInTheAnswer = ({ keys, onNext, index, total }: quetionPageInterface) => {
    const [answer, setAnswer] = useState<string>("");
    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAnswer(event.target.value)
    }
    const handleClick = () => {
        onNext(answer);
        setAnswer("")
    }
    return (
        <div className="relative h-screen w-full bg-[#BFECFF]">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 ">
                    <p className="quetion text-3xl">{userInformationQuestions[index]} </p>
                    <input type="text"
                        className="p-2 my-2 border-2 border-slate-500 border-solid rounded-xl min-w-5/2"
                        onChange={handleInputChange}
                        value={answer}
                    />
                </div>
            </div>

            <div className="absolute bottom-0 w-full flex flex-col items-center">
                <div className="w-full flex justify-end mb-4">
                    <div className="p-4  mr-4">
                        <button onClick={handleClick} className='bg-[#E0CD5E] py-2 px-8 rounded-xl mt-5 border-solid border-2 border-slate-500'>next</button>
                    </div>
                </div>

                <div className=" p-4 rounded mb-4 flex items-center  w-full ">
                    <span className="w-full flex justify-center items-center">
                        <Progress aria-label="Loading..." className="max-w-sm" value={(index * 100) / total} />
                    </span>
                </div>
            </div>
        </div>
    );
}

const LessonPages = ({ onNext, index, total, question }: quetionPageInterface) => {
    const [answer, setAnswer] = useState<string>("");
    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAnswer(event.target.value)
    }
    const handleClick = () => {
        onNext(answer);
        setAnswer("")
    }
    return (
        <div className="relative h-screen w-full bg-[#BFECFF]">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 ">
                    <p className="quetion text-3xl xl:px-96 lg:px-48 sm:px-10 px-4 md:px-24">{question} </p>
                    {/* <input type="text"
                        className="p-2 my-2 border-2 border-slate-500 border-solid rounded-xl min-w-5/2"
                        onChange={handleInputChange}
                        value={answer}
                        placeholder="aks me if needed!"
                    /> */}

                </div>
            </div>

            <div className="absolute bottom-0 w-full flex flex-col items-center">
                <div className="w-full flex justify-end mb-4">
                    <div className="p-4  mr-4">
                        <button onClick={handleClick} className='bg-[#E0CD5E] py-2 px-8 rounded-xl mt-5 border-solid border-2 border-slate-500'>next</button>
                    </div>
                </div>

                <div className=" p-4 rounded mb-4 flex items-center  w-full ">
                    <span className="w-full flex   flex-col justify-center items-center">
                        <Progress aria-label="Loading..." className="max-w-sm" value={(index * 100) / total} />
                        <p className="text-sm"> tip: try refresing if it doesn't display anything or open in another tab</p>
                    </span>
                </div>

            </div>
        </div>
    );
}


export {
    FillInTheAnswer,
    LessonPages
}