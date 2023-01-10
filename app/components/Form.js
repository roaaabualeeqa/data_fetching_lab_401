'use client';

import { useEffect, useState } from "react";
import { replies } from '../data/replies.js';

import Toast from "./Toast.js";
import Trending from './Trending';

import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
import useSWR from 'swr';
import axios from "axios";


export default function Form() {
    const [userInput, setUserInput] = useState("");
    const [answeredQuestions, setAnsweredQuestions] = useState([{
        pet: "cat"
    }]);
    const [showToast, setShowToast] = useState(false);

    // data fetching with swr
    const { tokens } = useContext(AuthContext);
    const url = 'https://pets-api-1.herokuapp.com/api/v1/replies'
    const config = {
        headers: {
            'Authorization': `Bearer ${tokens.access}`
        }
    }
    console.log(tokens.access)
    const fetcher = url => axios.get(url, config).then(res => res.data)
    const { data, error } = useSWR(url, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    // end data fetching with swr

    // axios.get(url, config)
    // .then(res =>{
    //     console.log('axios data', res.data)
    // })

    const handleClose = () => {
        setShowToast(!showToast);
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // the old code
        // const reply = replies.reduce((acc, item) => {
        //     if (item[e.target.petName.value]) acc = item[e.target.petName.value]
        //     return acc;
        // }, "")

        const reply = data.reduce((acc, item) => {
            if (item['animal'] == userInput){
                acc = item.reply
            }
            return acc;
        }, "")


        const fullReply = {
            pet: e.target.petName.value,
            personType: reply || "You are a unique person"
        }
        // keep the old entries and save the new one
        setAnsweredQuestions([...answeredQuestions, fullReply])
        setShowToast(true);
    }


    return (
        <>
            <section className="flex flex-col justify-center min-h-screen py-6 bg-fixed bg-gray-100 bg-center bg-cover bg-form-pattern bg- sm:py-12 dark:text-white" >
                <section className="relative py-3 sm:max-w-xl sm:mx-auto ">
                    <section
                        className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-700 to-cyan-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </section>
                    <section className="relative px-4 py-10 bg-white shadow-inner shadow-blue-500 sm:rounded-3xl sm:p-20 dark:bg-black ">
                        <section className="max-w-md mx-auto">
                            <section>
                                <h1 className="text-2xl font-semibold">Tell us Your Pet, We will tell you who you are</h1>
                            </section>
                            <section className="sectionide-y sectionide-gray-200">
                                <form onSubmit={handleSubmit} className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                    <section className="relative">
                                        <input onChange={handleChange} autoComplete="off" id="petName" name="petName" type="text" className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" placeholder="Cats maybe" />
                                        <label htmlFor="petName" className="absolute left-0 -top-3.5 text-gray-600 text-sm 
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Give us a Name</label>
                                    </section>

                                    <section className="relative">
                                        <button className="px-2 py-1 text-white rounded-md bg-cyan-900 hover:bg-cyan-700"> Guess </button>
                                    </section>
                                </form>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            {
                showToast &&
                <Toast message={answeredQuestions?.at(-1)?.personType} handleClose={handleClose} />
            }
            {answeredQuestions.length > 0 &&
                <Trending answersArr={answeredQuestions} />
            }
        </>
    )
}