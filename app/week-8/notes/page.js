"use client";
import {useState, useEffect} from "react";

const fetchRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
};

const getDogBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return Object.keys(data.message);
};

const getBreedImage = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    return data.message;
};


export default function Page() {

    const [dogUrl, setDogUrl] = useState(null);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(null);
    
    const loadBreedImage = async (breed) => {
        const selectBreed = await getBreedImage(breed);
        setDogUrl(selectBreed);
    };
    
    const loadRandomDog = async () => {
        const url = await fetchRandomDog();
        setDogUrl(url);
    };

    const loadDogBreeds = async () => {
        const breedImage = await getDogBreeds();
        setDogBreeds(breedImage);
    };


    useEffect(() => {
        loadRandomDog();
        loadDogBreeds();
    }, []);

    useEffect(() => {
        loadBreedImage(selectedBreed);
    }, [selectedBreed]);

    return (
        <main>
            <h1>Random Dog</h1>
            <img src={dogUrl} alt="A random dog" />
            <h2>Dog Breeds</h2>
            <select className="text-black"  value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
                {dogBreeds.map((breed) => (
                    <option value={breed} key={breed} >{breed}</option>
                ))}
            </select>
        </main>
    );
}