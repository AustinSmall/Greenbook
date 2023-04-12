import React from 'react';
import Slideshowcomponent from '../components/Slideshow';

const Home = () => {
    return (
    <main className='bg-vintage'> 
     <div className='w-3/4 mx-auto'>
         <Slideshowcomponent/>
    </div>
    <div>
        <h1>Our Purpose</h1>
    </div>
     <section>
        <p>
        The Durham Green Book listings served as a proxy for Black tourism activity in Durham and the vitality and vibrancy of the Hayti neighborhood, the nexus of the listings. 
        Listings peaked between 1947–1955 and were overwhelmingly concentrated in the cultural center of the Black population, the neighborhood known as Hayti. 
        </p>

        <h1>Our Story</h1>
        <p>
          Our creators realize that nonprofit organizations are paying large amounts of money to have interactive portals 
          that allow them to communicate with their donors and future donors. This site will bridge the gap between donors and
          account managers of nonprofit organizations.
        </p>
        <h1>How It All Works</h1>
        <p>
          Donors are able to communicate about upcoming pledges, update their contact information and even make a donation all
          from one place. Account managers will have a running record of all communication, with any particular donor, 
          eliminating the need to create contact reports in their database.
        </p>
        
    </section>
        </main>
    )
}

export default Home;