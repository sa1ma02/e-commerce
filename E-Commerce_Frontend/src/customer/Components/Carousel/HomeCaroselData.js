import bg1 from './bg1.jpeg';
import bg2 from './bg2.jpeg';

export const homeCarouselData=[
    {
        image:bg1,
        path:"/"
    },
    {
        image:bg2,
        path:"/"
    }
   

]

const Carousel = () => {
    const carouselContainerStyle = {
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
       
    };

    const carouselItemStyle = {
        flex: '1 0 auto',
        
    };

    const carouselImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
      
       
    };

    return (
        <div style={carouselContainerStyle}>
            {homeCarouselData.map((item, index) => (
                <a href={item.path} key={index} style={carouselItemStyle}>
                    <img src={item.image} alt={`Slide ${index}`} style={carouselImageStyle} />
                </a>
            ))}
        </div>
    );
};

export default Carousel;