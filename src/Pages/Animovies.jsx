import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Anime } from '../Data/Anime';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Mobile() {
    const responsiveMainCarousel = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 5 },
        desktop: { breakpoint: { max: 1200, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
        mobile: { breakpoint: { max: 768, min: 464 }, items: 2 },
        smallMobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const responsiveSimpleCarousel = {
        all: { breakpoint: { max: 4000, min: 0 }, items: 1 }
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
                    "https://wallpapercave.com/wp/wp11184030.png",
                    "https://wallpapercave.com/wp/wp6085061.jpg",
                    "https://wallpapercave.com/wp/wp11333331.jpg",
                ].map((src, index) => (
                    <div key={index} style={{ textAlign: "center", position: "relative" }}>
                        <img 
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                            style={{ width: "100%", height: "60vh", objectFit: "cover" }} 
                        />
                    </div>
                ))}
            </Carousel>

            <h1 style={{ color: "white", fontSize: "1.8rem", textAlign: "center", margin: "20px 0" }}>Movies</h1>
            {/* Main Carousel */}
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={true}    
                autoPlay={false}    
                showDots={false}    
                arrows={true}
            >
                {Anime.map((item) => (
                    <Link to={`/animovie/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
                        <div className='move' style={{ padding: "10px", textAlign: "center" }}>
                            <img 
                                src={item.image} 
                                alt={`${item.title} Poster`} 
                                style={{ 
                                    height: "200px", 
                                    width: "100%", 
                                    objectFit: "cover", 
                                    borderRadius: "8px" 
                                }} 
                            />
                            <p style={{ color: "white", fontSize: "1.2rem", marginTop: "10px" }}>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
}

export default Mobile;
