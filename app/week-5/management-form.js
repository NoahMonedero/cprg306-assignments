"use client"
import { useState } from "react";

export default function ContactForm(){

    const [fulleName, setFullName] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const [email, setEmail] = useState();
    const [birthday, setbirthday] = useState();
    const [contactType, setContactType] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" onChange=""/>
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email"/>
            </div>
            <div>
                <label>Birthdate:</label>
                <input type="date"/>
            </div>
            <div>

            </div>
        </form>
    );
}
