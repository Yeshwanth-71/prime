import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Tamil } from '../Data/Tamil';

function Mobile() {
    const responsiveMainCarousel = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const responsiveSimpleCarousel = {
        all: {
            breakpoint: { max: 4000, min: 0 },
            items: 1  // Display one item at a time
        }
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
                <div style={{ textAlign: "center", position: "relative" }}>
                    <img 
                        src="https://moviezgyan.com/wp-content/uploads/2020/12/2758843-2048x1357.jpg" 
                        alt="First Slide" 
                        style={{ width: "100%", height: "700px", objectFit: "cover" }} // Increased height
                    />
                    <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "#fff" }}>
                    </div>
                </div>
                <div style={{ textAlign: "center", position: "relative" }}>
                    <img 
                        src="https://wallpaperaccess.com/full/9357965.jpg" 
                        alt="Second Slide" 
                        style={{ width: "100%", height: "700px", objectFit: "cover" }} // Increased height
                    />
                    <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "#fff" }}>
                    </div>
                </div>
                <div style={{ textAlign: "center", position: "relative" }}>
                    <img 
                        src="https://wallpaperaccess.com/full/3727238.jpg" 
                        alt="Third Slide" 
                        style={{ width: "100%", height: "700px", objectFit: "cover" }} // Increased height
                    />
                    <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "#fff" }}>
                    </div>
                </div>
            </Carousel>
                <h1 style={{color:"white"}}>Movies</h1>
            {/* Main Carousel (Existing) */}
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={false}    
                autoPlay={false}    
                showDots={false}    
                arrows={true}       
            >
                {Tamil.map((item) => (
                    <div key={item.id} className='move' style={{ padding: "10px", textAlign: "center" }}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "8px" }} 
                        />
                        <p>{item.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Mobile;
