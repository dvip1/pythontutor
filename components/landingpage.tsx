"use client"
import { useRouter } from 'next/navigation'
import defaultColors from '@/ui/background';
import { getQuickSand } from '@/ui/fonts';

export default function LandingPage() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/dashboard");
    }
    return (
        <div className={`text-xl min-h-screen flex justify-center items-center bg-[#BFECFF]`}>
            <div className="banner ">
                <p className={`text-5xl font-bold ${getQuickSand.className}`}>Learn Python!</p>
                <button onClick={handleClick} className='bg-[#E0CD5E] p-3 rounded-xl mt-5 border-solid border-2 border-slate-500'>get started!</button>
            </div>
        </div>

    )
}