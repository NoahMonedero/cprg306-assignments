"use client"

import ContactForm from "./contact-form";
import ContactList from "./contact-list";
import directoryData from "./contacts-info.json";
import { useState } from "react";

// let directoryArray = directoryData.map(
//     (contact) => ({...contact})
// );

export default function ContactPage(){
    
    const [directoryList,setDirectoryList] = useState(
        directoryData.map((contact) => ({...contact}))
    );
    
    const handleNewContact = (newContact) =>{
        setDirectoryList([...directoryList, newContact])
    };

    const [isFormOpen,setFormOpen] = useState(false);
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);
    
    
    return(
        <main className="m-5">
            <h1>Contact Directory</h1>
            { isFormOpen && <ContactForm directoryArray={directoryList} newContactFunc={handleNewContact}/>}
            <ContactList directoryArray={directoryList}/>
            <button onClick={openForm}>Add New Contact</button>
        </main>
    );
}