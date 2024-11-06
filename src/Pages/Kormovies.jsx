import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Korea } from '../Data/Korean';
import Header from '../Components/Header';

function Mobile() {
    const responsiveMainCarousel = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    const responsiveSimpleCarousel = {
        all: { breakpoint: { max: 4000, min: 0 }, items: 1 }
    };

    return (
        <div className='car'>
            <Header/>
            
            <Carousel 
                responsive={responsiveSimpleCarousel} 
                infinite={true} 
                autoPlay={true} 
                showDots={true} 
                arrows={true}
            >
                <div style={{ textAlign: "center", position: "relative"}}>
                    <img 
                        src="https://wallpaperaccess.com/full/15348414.jpg" 
                        alt="First Slide" 
                        style={{ width: "100%", height: "700px", objectFit: "cover" }}
                    />
                </div>
                <div style={{ textAlign: "center", position: "relative" }}>
                    <img 
                        src="https://wallpaperaccess.com/full/3631765.jpg" 
                        alt="Second Slide" 
                        style={{ width: "100%", height: "700px", objectFit: "cover" }}
                    />
                </div>
                <div style={{ textAlign: "center", position: "relative" }}>
                    <img 
                        src="https://wallpapercave.com/wp/wp14483794.jpg" 
                        alt="Third Slide" 
                        style={{ width: "100%", height: "700px", objectFit: "cover" }}
                    />
                </div>
            </Carousel>
            
            <h1 style={{ color: "white" }}>Movies</h1>
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={true}    
                autoPlay={false}    
                showDots={false}    
                arrows={true}       
            >
                {Korea.map((item) => (
                    <div key={item.id} className='move' style={{ padding: "10px", textAlign: "center" }}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "8px" }} 
                        />
                        <p style={{color:"white"}}>{item.title}</p>
                    </div>
                ))}
            </Carousel>

        </div>
    );
}

export default Mobile;
