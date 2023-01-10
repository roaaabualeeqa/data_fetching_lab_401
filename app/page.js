'use client';

import Hero from './components/Hero';
import Form from './components/Form';
import { useContext } from "react";
import LoginForm from './components/LoginForm';
import { AuthContext } from './contexts/Auth';

export default function Page() {

    const { tokens } = useContext(AuthContext)

    return (
        <>
            {tokens ? <> <Hero /> <Form /></> : <LoginForm />}
        </>
    )
}