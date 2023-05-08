"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Exercise 1 (data in log)
// ASYNC function to get current Joke
let currentJoke = "";
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://icanhazdadjoke.com/`;
        const header = {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        };
        const response = yield fetch(url, header);
        const data = yield response.json();
        currentJoke = data.joke;
        console.log(currentJoke);
        return currentJoke;
    }
    catch (error) {
        console.error(error);
    }
});
getJoke();
