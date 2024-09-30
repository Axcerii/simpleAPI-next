'use client';
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Ceci est la page d'accueil</h1>
          <ul>
            <li>
              <a href='animals/934' className="lien">Rocky le lapin</a> est l'animal le plus vieux.
            </li>

            <li>L'oiseau est l'animal le plus représenté avec 179 oiseaux.</li>
            <li>
              <a href='persons/18' className="lien">Sophia Brown</a>, <a href='persons/208' className="lien"> Michael Taylor</a> et <a href='persons/268' className="lien"> Sarah White</a> ont le plus d'animaux, avec 6 animaux chacuns.
            </li>
            <li>
              <a href='persons/268' className="lien"> Sarah White</a> possèdes le plus de chat, avec 4 chats.
            </li>
            <li>
              <a href='persons/209' className="lien">Emma Smith</a> possèdes l'animal le plus lourd qui est la chienne <a href='animals/821' className="lien"> Chloe</a> qui pèse 49.937 kg.
            </li>
            <li>
              <a href='persons/18' className="lien">Sophia Brown</a> possède le groupe d'animal le plus lourd avec un poids total de 172,152 kg.
            </li>
          </ul>
          <style jsx>
            {`
              li{
                font-size: 1.2em;
                margin-bottom : 0.5em;  
              }

              h1{
              margin-bottom: 1em;
              }

              li::before{
                content: '• ';
              }

              .lien{
                color: blue;
              }
              
              .lien:hover{
                text-decoration: underline;
              }
          `}
          </style>
    </div>
  );
}