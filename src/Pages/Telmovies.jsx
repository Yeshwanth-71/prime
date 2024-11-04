import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Telugu } from '../Data/Telugu';

function Mobile() {
    const responsiveMainCarousel = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    const responsiveSimpleCarousel = {
        all: { breakpoint: { max: 4000, min: 0 }, items: 1 }  // Display one item at a time
    };

    return (
        <div className='car'>
            {/* Simple Carousel */}
            <Carousel 
                responsive={responsiveSimpleCarousel} 
                infinite={true} 
                autoPlay={true} 
                showDots={true} 
                arrows={true}
            >
                {/* Adjust height in the style */}
                {[ // Using an array to reduce redundancy
                    {
                        src: "https://th.bing.com/th/id/OIP.xZLtGKiLzGXIjWTfU3yMUQAAAA?rs=1&pid=ImgDetMain",
                    },
                    {
                        src: "https://wallpaperaccess.com/full/9357965.jpg",
                    },
                    {
                        src: "https://wallpaperaccess.com/full/3727238.jpg",
                    }
                ].map((slide, index) => (
                    <div key={index} style={{ textAlign: "center", position: "relative" }}>
                        <img 
                            src={slide.src} 
                            alt={`Slide ${index + 1}`} 
                            style={{ width: "100%", height: "700px", objectFit: "cover" }} // Increased height
                        />
                        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "#fff" }}>
                            <h3>{slide.label}</h3>
                            <p>{slide.text}</p>
                        </div>
                    </div>
                ))}
            </Carousel>

            <h1 style={{ color: "white" }}>Movies</h1>
            {/* Main Carousel (Existing) */}
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={true}    
                autoPlay={false}    
                showDots={false}    
                arrows={true}       
            >
                {Telugu.map((item) => (
                    <div key={item.id} className='move' style={{ padding: "10px", textAlign: "center", gap:"15px" }}>
                        <img src={item.image} alt={item.title} style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "8px" }} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Mobile;
