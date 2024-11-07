import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Telugu } from '../Data/Telugu';
import { Latest } from '../Data/Latesttel';
import Header from '../Components/Header';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function Mobile() {
    const [selectedVideo, setSelectedVideo] = useState(null);

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
            <Header />
            <Carousel 
                responsive={responsiveSimpleCarousel} 
                infinite={true} 
                autoPlay={true} 
                showDots={true} 
                arrows={true}
            >
                {[ 
                    { src: "https://th.bing.com/th/id/OIP.xZLtGKiLzGXIjWTfU3yMUQAAAA?rs=1&pid=ImgDetMain" },
                    { src: "https://wallpaperaccess.com/full/9357965.jpg" },
                    { src: "https://wallpaperaccess.com/full/3727238.jpg" }
                ].map((slide, index) => (
                    <div key={index} style={{ textAlign: "center", position: "relative" }}>
                        <img 
                            src={slide.src} 
                            alt={`Slide ${index + 1}`} 
                            style={{ width: "100%", height: "700px", objectFit: "cover" }} 
                        />
                    </div>
                ))}
            </Carousel>

            <h1 style={{ color: "white" }}>Movies</h1>
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={true}    
                autoPlay={false}    
                showDots={false}    
                arrows={true}       
            >
                {Telugu.map((item) => (
                     <Link to={`/telmovie/${item.id}`}  style={{textDecoration:"none"}}>
                    <div key={item.id} className='move' style={{ padding: "10px", textAlign: "center", gap: "15px" }}>
                        <img src={item.image} alt={item.title} style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "8px" }} />
                        <p style={{ color: "white" }}>{item.title}</p>
                    </div></Link>
                ))}
            </Carousel>

            <h1 style={{ color: "white" }}>Popular Movies</h1>
            <Carousel 
                responsive={responsiveMainCarousel} 
                infinite={true}    
                autoPlay={false}    
                showDots={false}    
                arrows={true}       
            >
                {Latest.map((item) => (
                   
                    <div 
                        key={item.id} 
                        className='move' 
                        style={{ padding: "10px", textAlign: "center", gap: "15px", cursor: 'pointer' }}
                        onClick={() => {
                            console.log(`Playing video: ${item.videoUrl}`);
                            setSelectedVideo(item.videoUrl);
                        }}
                    >
                        <img src={item.thumbnailUrl} alt={item.title} style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "8px" }} />
                        <p style={{ color: "white" }}>{item.title}</p>
                    </div>
                ))}
            </Carousel>

            {/* Video Player (Using ReactPlayer) */}
            {selectedVideo && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>Now Playing</h2>
                    <ReactPlayer 
                        url={selectedVideo} 
                        controls 
                        playing // Auto-play when selected
                        width="100%" 
                        height="500px" 
                        onError={() => console.error("Error loading video")}
                    />
                </div>
            )}
        </div>
    );
}

export default Mobile;
