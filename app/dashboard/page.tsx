"use client"
import { FillInTheAnswer } from "@/components/quetionpage"
import { useEffect, useState } from "react"
import { LocalStorageItem } from "@/utils/localstorage"
import { userInformationItems } from "@/utils/aboutUser"
import { getQuickSand } from '@/ui/fonts';
import { ImBooks } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation"

export default function Page() {
    const newLocal = new LocalStorageItem();
    const [quetionIndex, setQuetionIndex] = useState<number>(0);

    const handleNext = (answer: string) => {
        newLocal.setItem(userInformationItems[quetionIndex], answer);
        setQuetionIndex(prev => prev + 1);

    }
    useEffect(() => {
        for (let i = 0; i < userInformationItems.length; i++) {
            if (!newLocal.hasItem(userInformationItems[i])) {
                setQuetionIndex(i);
                return;
            }

        }
        setQuetionIndex(userInformationItems.length)
    }, []);

    return (quetionIndex >= userInformationItems.length) ? <Dashboard /> : (
        <>
            <FillInTheAnswer total={userInformationItems.length} index={quetionIndex} keys={userInformationItems[quetionIndex]} onNext={handleNext} />
        </>
    );
}

const Dashboard = () => {
    return (
        <>
            <div className={`text-xl min-h-screen flex flex-col  bg-[#BFECFF]`}>
                <p className={`text-5xl mt-10 lg:mt-16 xl:mt-24 text-center flex justify-center space-x-4 ${getQuickSand.className}`}>
                    <span>Chapters</span> <ImBooks />
                </p>
                <div className="mt-10"></div>
                <div className="chapters flex flex-col items-center">
                    <Chapters isLocked={false} chaptername="Introduction" />
                    <Chapters isLocked={true} chaptername="Variables" />
                    <Chapters isLocked={true} chaptername="Statements" />
                    <Chapters isLocked={true} chaptername="Loops" />
                    <Chapters isLocked={true} chaptername="Functions" />
                    <Chapters isLocked={true} chaptername="More Functions" />
                </div>
            </div>
        </>
    )
}

interface chapterInterface {
    chaptername: string
    isLocked: boolean
}
const Chapters = ({ chaptername, isLocked }: chapterInterface) => {
    const router = useRouter();

    return <>
        <div className="bg-white min-w-96 py-4 px-2 rounded-xl flex justify-between mt-3 border-2 border-slate-500 border-solid cursor-pointer" onClick={() => router.push(`/chapter/${chaptername}`)}>
            <h1 className="">{chaptername}</h1>
            <p className=""> {isLocked ? <FaLock /> : ""}</p>
        </div>
    </>

}