"use client";
export default function page(){

    const dogs = [
        {id:1,name: 'Dog', breed: 'Golden Retriever', imageUrl:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2'},
        {id:2,name: 'Cat', breed: 'Mystery Dog', imageUrl:'https://images.pexels.com/photos/247937/pexels-photo-247937.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2'},
        {id:3,name: 'German', breed: 'Shepard of Germans', imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2'},
    ];

    dogs.sort((a,b) => {if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0;});

    //Not show dog id == 2
    const noDog = dogs.filter( (dog) => dog.id !==2);

    const handleClick = (id) => {
        alert(id)
    };
//Remember the Map function iterates through each element in array.
return (
    <div className="sm:bg-slate-500 md:bg-slate-200">
        <h1>Week 5</h1>
        <ul>
            {dogs.map((dog) => (
                <li key={dog.id} onClick={() => handleClick(dog.id)}>
                    <h2>{dog.name}</h2>
                    <p>{dog.breed}</p>
                    <img src={dog.imageUrl} alt='dog.name'/>
                </li>
            ))}
        </ul>
        <h1 className="font-black">Dog id=2 Removed</h1>
        <ul>
            {noDog.map((dog) => (
                <li key={dog.id}>
                    <h2>{dog.name}</h2>
                    <p>{dog.breed}</p>
                    <img src={dog.imageUrl} alt='dog.name'/>
                </li>
            ))}
        </ul>
    </div>
);
}