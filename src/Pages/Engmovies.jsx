import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { English } from '../Data/English';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Mobile() {
    const responsiveMainCarousel = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    const responsiveSimpleCarousel = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className='car'>
            <Header />
            {/* Simple Carousel */}
            <Carousel 
                responsive={responsiveSimpleCarousel} 
                infinite={true} 
                autoPlay={true} 
                showDots={true} 
                arrows={true}
            >
                {[
                    "https://wallpaperaccess.com/full/1992037.png",
                    "https://www.comingsoon.net/wp-content/uploads/sites/3/2022/12/The_Devils_Hour_Key_Art.jpg?resize=2048",
                    "https://wallpaperaccess.com/full/1104242.jpg",
                ].map((src, index) => (
                    <div key={index} style={{ textAlign: "center", position: "relative" }}>
                        <img 
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                            style={{ width: "100%", height: "50vh", objectFit: "cover" }} 
                        />
                    </div>
                ))}
            </Carousel>

            {/* Movies Section */}
            <h1 style={{ color: "white", fontSize: "1.5em", textAlign: "center" }}>Movies</h1>
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={true}    
                autoPlay={false}    
                showDots={false}    
                arrows={window.innerWidth > 768} // Conditionally hide arrows on mobile
            >
                {English.map((item) => (
                    <Link 
                        key={item.id} 
                        to={`/engmovie/${item.id}`} 
                        style={{ textDecoration: "none", display: "block" }}
                    >
                        <div className='move' style={{ padding: "10px", textAlign: "center" }}>
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                style={{ height: "150px", width: "150px", objectFit: "cover", borderRadius: "8px" }} 
                            />
                            <p style={{ color: "white" }}>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
}

export default Mobile;
