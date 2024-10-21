"use client";
import { useState } from "react";

export default function ContactForm({directoryArray, newContactFunc, closeFormFunc}){

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("");

    const handleFnameChange = (event) => setfName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // validation
        let newContact = {
            id:(directoryArray.length + 2),
            fname: fName,
            lname: lName,
            email: email,
            phone: phone,
            type: type
        };

        newContactFunc(newContact);
        setfName("");
        setlName("");
        setEmail("");
        setPhone("");
        setType("");
    }
    return(
        <div className="absolute h-full w-full flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-slate-600 rounded">
                <h2>Contact Form</h2>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFnameChange} value={fName}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(event) => setlName(event.target.value)} value={lName}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(event) => setEmail(event.target.value)} value={email}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" onChange={(event) => setPhone(event.target.value)} value={phone}/>
                </div>
                <div>
                    <label>Type:</label>
                    <select onChange={(event) => setType(event.target.value)} value={type}>
                        <option value="" selected disabled>--Choose an option--</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div>
                    <button>Add New Contact</button>
                </div>
            </form>  
        </div>
    );

}