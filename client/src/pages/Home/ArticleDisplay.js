import React from 'react';

const Article = () => {
  function splitWords() {
    let paragraphs = document.querySelector('.text');
  }

  return (
    <div className='article py-4 '>
      <main role='main' className='w-full flex-grow px-3'>
        <button className='mx-2 text-black underline hover:border hover:border-black bg-white flex items-center p-1'>
          Add to Favourites
        </button>
        <h2 className='hero'>Article of the Day</h2>
        <span className='mx-2'>de</span>
        <div id='text'>
          <p className='text-lg mx-4'>
            Der Kreuzbau ist ein Typen­bau für Schul­gebäude in Ham­burg.
            Zwischen 1957 und 1963 wurden dort an gut 60 Stand­orten
            staat­licher Schulen Kreuz­bauten errich­tet. Diese Bauten haben
            vier Flügel auf kreuz­förmi­gem Grund­riss, woraus sich der Name
            ablei­tet. Der Kreuz­bau hat drei Ge­schosse und ein Flach­dach.
            Jedes Stock­werk zählt vier Klas­sen­zimmer und zuge­hörige kleine
            Gruppen­räume, womit der Kreuz­bau Platz für zwölf Schul­klas­sen
            bietet. Die Klassen­zimmer werden durch ein zentra­les Treppen­haus
            direkt erschlos­sen – ohne Korri­dor und nach Art des Schuster­typs.
            Der Ent­wurf für den Kreuz­bau stammte vom Hambur­ger Bau­direk­tor
            Paul Seitz. Haupt­vorteil dieses Typen­baus war die schnelle
            Montage, nach­teilig ist aus heuti­ger Sicht die mangelnde
            Wärme­dämmung. Mehr als 80 % der in Ham­burg auf­gestell­ten
            Kreuz­bauten stehen noch und dienen meist Grund­schulen als
            Klassen­haus. Die meisten Kreuz­bauten wurden inzwi­schen saniert,
            einige sind Teil eines denk­mal­geschütz­ten Ensembles."
          </p>
        </div>
        <div className='button my-5 grid place-items-center'>
          <button className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
            Add to Vocab ▼
          </button>
        </div>
      </main>
    </div>
  );
};

export default Article;
