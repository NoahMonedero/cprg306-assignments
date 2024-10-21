import ContactCard from "./contact-card";


export default function ContactList(directoryArray){
    
    return(
        <section className = "grid grid-cols-3 gap-5 p-5">
            {directoryArray.map((contact) => (
                <ContactCard contact={contact} />
            ))}
        </section> 
    );
}