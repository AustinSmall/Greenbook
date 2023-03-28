import React from "react";
 
const Locations = () => {
    return (
        <main>
             <ol>
                <a href="#a" li> A </a>
                <a href="#b" li> B</a>
                <a href="#c" li> C </a>
                <a href="#d" li> D </a>
                <a href="#e" li> E </a>
                <a href="#f" li> F </a>
                <a href="#g" li> G </a>
                <a href="#h" li> H </a>
                <a href="#i" li> I </a>
                <a href="#j" li> J </a>
                <a href="#k" li> K </a>
                <a href="#l" li> L </a>
                <a href="#m" li> M </a>
                <a href="#n" li> N </a>
                <a href="#o" li> O </a>
                <a href="#p" li> P </a>
                <a href="#q" li> Q </a>
                <a href="#r" li> R </a>
                <a href="#s" li> S </a>
                <a href="#t" li> T </a>
                <a href="#u" li> U </a>
                <a href="#v" li> V </a>
                <a href="#w" li> W </a>
                <a href="#x" li> X </a>
                <a href="#y" li> Y</a>
                <a href="#z" li> Z </a>
                
            </ol>

            <section>
                <div className="grid-cols-5">
                    <div> 
                        <h2 id="#a" className="py-10">A</h2>
                    </div>
                    <div>
                        <h2 className="py-1.5">B</h2>
                        <ul>
                            <li> Biltmore Hotel </li>
                            <li>Biltmore Service Station</li>
                            <li>Boykin Tailors</li>
                            <li>Bull City Drug Store </li>
                            
                        </ul>
                    </div>
                    <div className="py-5">
                        <h2 className="py-1.5">C</h2>
                        <ol className="space-y-.5">
                            <li>Catlett's Restaurant </li>
                            <li>Chautauqua Tavern</li>
                            <li>Clay's Service Station </li>
                            <li>College Inn Restaurant/Tavern </li>
                            <li>Community Tailors</li>
                            <li>Congro Grill</li>
                            <li>Cu-Cu Restaurant (Justin Wright)</li>
                        </ol>
                    </div>

                    <div className="py-5"> 
                    <h2 className="py-1.5">D</h2>
                    <ol className="space-y-.5">
                        <li>De Lux Barber Shop </li>
                        <li>De Shazors Hostelry/Beauty Parlor  </li>
                        <li>D'Orsay Beauty Parlor </li>
                    </ol>
                    </div>

                    <div className="py-5">
                        <h2 className="py-1.5">E</h2>
                        <ol className="space-y-.5">
                            <li>Elite</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="py-1.5"> F</h2>
                        <ol>
                            <li>Friendly City Beauty Parlor/Friendly Barber Shop </li>

                        </ol>
                    </div>

                    <div>
                        <h2 className="py-1.5">G</h2>
                        <ol className="space-y-.5">
                            <li>Garrett's Biltmore Drug Store</li>
                            <li>Granite Service Station</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="py-1.5">H</h2>
                        <ol>
                            <li>
                            Hollywood Tavern (Gian Hasbrock)
                            </li>
                        </ol>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Locations