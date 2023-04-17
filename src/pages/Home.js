import React from 'react';
import Slideshowcomponent from '../components/Slideshow';

const Home = () => {
    return (
    <main className='bg-vintage'> 
     <div className='w-3/4 mx-auto'>
         <Slideshowcomponent/>
    </div>
    <div>
        <h1 className='text-center pt-2'>Our Purpose</h1>
    </div>
     <section className='text-center'>
        <p>
        The Durham Green Book listings served as a proxy for Black tourism activity in Durham and the vitality and vibrancy of the Hayti neighborhood, the nexus of the listings. 
        Listings peaked between 1947–1955 and were overwhelmingly concentrated in the cultural center of the Black population, the neighborhood known as Hayti. 
        </p>

        <h1 className='text-center pt-4'>Our Story</h1>
        <p>
          Minim anim eiusmod aute dolore Lorem in deserunt minim eiusmod. Irure eu do eiusmod mollit irure velit veniam adipisicing enim cillum aliqua ea esse nisi.
          Ad irure occaecat qui cillum officia cupidatat ea adipisicing labore quis.
          Velit ut enim ipsum quis consequat. Esse est aute labore enim nisi.
          Culpa veniam nisi adipisicing minim aute cillum et sunt reprehenderit ea officia.
          Nulla dolore eu deserunt excepteur fugiat tempor ut aute.
        </p>
        <footer className='bg-vinatge'></footer>
        
    </section>
        </main>
    )
}

export default Home;