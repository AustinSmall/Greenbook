import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <div className=" bg-vintage">

    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1939 "
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">7 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">First year Durham is listed in The Green Book. World War II begins.</h4>
       
    <p>
       2 Hotels 1 Tavern, 2 Beauty Shops, 2 Service Stations.
    </p>
  </VerticalTimelineElement>
  
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1947"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">15 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">First year published after WWII hiatus from 1942-46.</h4>
    <p>
      2 Hotels, 3 Restaurants, 2 Beauty Shops, 1 Barber Shop, 2 Taverns, 3 Service Stations, 2 Tailors.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1950"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title"> 34 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">Hayti, Durham's largest segregated black neighborhoods, is known as Harlem of the South.</h4>
    <p>
       1 Hotel, 1 Tourist Home, 5 Restaurants, 5 Beauty Parlors, 2 Barber Shops, 4 Taverns, 8 Service Stations, 2 Drug Stores, 6 Tailors.
    </p>
    <img className="pt-5 w-3/4" src="college-inn.jpg"></img>
  </VerticalTimelineElement>
 
 
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1952"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">33 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">Pettigrew Street is known as Black Wall Street</h4>
    <p>
      1 Hotel, 1 Tourist Home, 5 Restaurants, 5 Beauty Shops, 2 Barber Shops, 4 Taverns, 7 Service Stations, 2 Drug Stores, 6 Tailors. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1954"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">29 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">Brown v Board of Education prevents separate but equal doctrine.</h4>
    <p>
      2 Hotels, 4 Restaurants, 5 Beauty Parlors, 1 Barber Shops, 3 Taverns, 7 Service Stations, 2 Drug Stores, 5 Tailors.
    </p>
    <img className="pt-5" src="brown.jpeg"></img>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1956"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">4 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">Supreme Court declares Alabama Bus Segregation illegal.</h4>
    <p>
      1 Hotel, 1 Hostelry, 2 Restaurants.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1960"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">4 Listings</h3>
    <h4 className="vertical-timeline-element-subtitle">Kennedy elected. Greensboro Woolworth Sit-In</h4>
    <p>
      1 Hostelry, 1 Hotel, 2 Restaurants.
    </p>
    <img className="pt-5" src="sit-in.jpeg"></img>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(250, 250, 250)' }}
    date="1966-67"
    iconStyle={{ background: 'rgb(0,128,0)', color: '#fff' }}
    >
  <h3> 4 Listings </h3>
  <h4> Durham Freeway Bond passed 1962 with support of Black people.</h4>
  <p>
    1 Hostelry, 1 Hotel, 2 Restaurants.
  </p>
  
  </VerticalTimelineElement>
  <img src="Greenbook.jpg"className="flex-row relative w-2/4 translate-x-[18.8rem] max-w-full" ></img>
</VerticalTimeline>
    </div>


  )
}
export default Timeline