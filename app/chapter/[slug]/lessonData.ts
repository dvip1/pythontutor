"use client"
import { LocalStorageItem } from "@/utils/localstorage"
const localStorage = new LocalStorageItem();
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
const likesToDo = localStorage.getItem("likesToDo")
const animal = localStorage.getItem("animal")
const Introduction = {
    command: "teach the user whose data is given below. teach them what youll able to do using python, and the how to get started and write hello world suggest any online IDE as it's easy.",
    generate: "generate 5 statements 1 to 5 for the command given use emoji and tone as per the user details given",
    message: "generate statement1 statement5 in here, message by replacing this statement",
    index: 5,
    name: name,
    age: age,
    likeToDo: likesToDo,
    animal: animal
}
export {
    Introduction
}