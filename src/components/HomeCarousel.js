import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// Carousel imported from react-bootstrap for compatibility
import DCC from '../images/DCC.jpg'
import Howth from '../images/Howth.jpg'
import RocheCastle from '../images/Roche Castle.jpg'
import Carlingford from '../images/Carlingford.jpg'
import CustomHouse from '../images/Custom House.jpg'
import Newgrange from '../images/Newgrange.jpg'
// images for the carousel are imported and assigned names
// the images for the website have been exported in Photoshop for web, keeping file sizes low while maintaining image quality

function HomeCarousel(){
    return(
        <div className="home-carousel">
			<Carousel interval={2500}>
				{/* time interval applied to each slide of the carousel, 2500=2.5 seconds */}
				<Carousel.Item>
					<img className="d-block w-100" src={RocheCastle} title="Roche Castle" alt="Roche Castle"></img>
					{/* images are given a default style of display:block and a width of 100% 
					title and alt text is added in the event of image load errors and for accessibility and
					search engine optimisation*/}
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={CustomHouse} title="CustomHouse" alt="CustomHouse"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={DCC} title="Dublin Convention Centre and Bridge" alt="DCC and Bridge"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Carlingford} title="Carlingford" alt="Carlingford"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Howth} title="Howth Lighthouse" alt="Howth Lighthouse"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Newgrange} title="Newgrange" alt="Newgrange"></img>
				</Carousel.Item>
			</Carousel>				
    	</div> 

    )
}

export default HomeCarousel