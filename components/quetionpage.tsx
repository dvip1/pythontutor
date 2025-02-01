"use client"

import { SetStateAction, useState } from "react"
import { userInformationQuestions } from "@/utils/aboutUser"

interface quetionPageInterface {
    keys: string
    onNext: (answer: string) => void
    index: number
}
const FillInTheAnswer = ({ keys, onNext, index }: quetionPageInterface) => {
    const [answer, setAnswer] = useState<string>("");
    console.log("thsi is they key", keys);
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

                <div className=" p-4 rounded mb-4">
                    Div C (Bottom Center)
                </div>
            </div>
        </div>
    );
}
export {
    FillInTheAnswer
}