'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function PersonDetails() {
  const router = useRouter();
  const [person, setPerson] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const currentId = pathArray[pathArray.length - 1];
    setId(currentId);
  }, []);

  useEffect(() => {
    if (id) {
      console.log('Appel API avec ID :', id);
      const fetchPerson = async () => {
        try {
          const response = await fetch(`http://localhost:3001/person/${id}`);
          const data = await response.json();
          console.log('Données reçues :', data);
          setPerson(data);
        } catch (error) {
          console.error('Erreur lors de la récupération de la personne:', error);
        }
      };

      fetchPerson();
    }
  }, [id]);

  if (!person) return <div>Chargement...</div>;

  return (
    <div className='api-details'>
      <h1>Détails :</h1>
      <p>Prénom: {person.firstName}</p>
      <p>Nom : {person.lastName}</p>
      <p>Email: {person.email}</p>
      <p>Téléphone: {person.phoneNumber}</p>
    </div>
  );
}