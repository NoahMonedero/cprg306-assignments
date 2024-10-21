export default function ContactCard({contact}){

    let {id,fname,lname,email,phone,type} = contact;
    return(
        <div className=" bg-cyan-800">
            <h2 className="font-extrabold">{lname}, {fname}</h2>
            <p key={id}>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Type: {type}</p>
        </div>
    );
}
