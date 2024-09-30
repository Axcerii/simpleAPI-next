'use client';

import { useEffect, useState } from 'react';
import Card from '../../components/Card';

export default function Persons() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch('http://localhost:3001/person');
        const data = await response.json();
        setPersons(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des personnes:', error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div>
      <h1>Liste des personnes</h1>
        <div className='card-container'>
        {persons.map((person) => (
          <Card
            key = {person.id}
            href= {`persons/${person.id}`}
            table = {[person.firstName, person.lastName, person.email]}
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