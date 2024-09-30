'use client';

import Link from 'next/link';
import React from 'react';

export default function Card({ table, href }) {
  return (
    <div>
    <Link href={href}>
        <div className="card">
            <ul>
                {table.map((info, index) =>(
                        <li key={index}>{info}</li>
                    )
                )}
            </ul>
        </div>
        </Link>


        <style jsx>{`
        .card{
            padding: 2em;
            border: solid black 1px;
            border-radius : 1em;
            width: 90%;
            margin: 0.5em;
            transition: ease-in-out 300ms all;
        }   
        .card:hover{
            background-color: #E2E2E2;
        }
      `}</style>
    </div>
  );
}