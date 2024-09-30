'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnimalDetails() {
  const router = useRouter();
  const [animal, setAnimal] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const currentId = pathArray[pathArray.length - 1];
    setId(currentId);
  }, []);

  useEffect(() => {
    if (id) {
      console.log('Appel API avec ID :', id);
      const fetchAnimal = async () => {
        try {
          const response = await fetch(`http://localhost:3001/animal/${id}`);
          const data = await response.json();
          console.log('Données reçues :', data);
          setAnimal(data);
        } catch (error) {
          console.error('Erreur lors de la récupération de l\'animal:', error);
        }
      };

      fetchAnimal();
    }
  }, [id]);

  if (!animal) return <div>Chargement...</div>;

  return (
    <div className='api-details'>
      <h1> Détails : </h1>
      <p>Nom : {animal.name}</p>
      <p>Espece : {animal.species}</p>
      <p>Race : {animal.breed}</p>
      <p>Poids: {animal.weight/1000}kg</p>
      <p>Âge: {animal.dateOfBirth}</p>
    </div>
  );
}