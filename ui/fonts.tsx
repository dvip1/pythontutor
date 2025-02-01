import { Poppins } from "next/font/google"
import { Nunito } from "next/font/google"
import { Quicksand} from "next/font/google"

const getPopinsDefault = Poppins({
    subsets: ["latin"],
    weight: "500"
});

const getPopinsThin = Poppins({
    subsets: ["latin"],
    weight: "300"
});

const getPopinsSuperThin = Poppins({
    subsets: ["latin"],
    weight: "100"
});

const getPopinsThick = Poppins({
    subsets: ["latin"],
    weight: "700"
});

const getPopinsSuperThick = Poppins({
    subsets: ["latin"],
    weight: "900"
});

const getNunito = Nunito({
    subsets: ["latin"],
});

const getQuickSand = Quicksand({
    subsets: ["latin"]
})

export {getQuickSand, getPopinsDefault, getPopinsSuperThin, getPopinsThin, getPopinsSuperThick, getPopinsThick, getNunito }