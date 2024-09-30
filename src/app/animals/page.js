'use client';

import { useEffect, useState } from 'react';
import Card from '../../components/Card';

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://localhost:3001/animal');
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des animaux:', error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div>
      <h1>Liste des animaux</h1>
      <div className='card-container'>
        {animals.map((animal) => (
          <Card
            key = {animal.id}
            table = {[animal.species, animal.name, animal.color]}
            href = {`animals/`+animal.id}
          />
        ))}
      </div>
      <style jsx>
        {`
        .card-container{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 80%;
          margin: auto;
        }
      `}
      </style>
    </div>
  );
}