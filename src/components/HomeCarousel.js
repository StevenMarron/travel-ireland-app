import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import DCC from '../images/DCC.jpg'
import Howth from '../images/Howth.jpg'
import RocheCastle from '../images/Roche Castle.jpg'
import Carlingford from '../images/Carlingford.jpg'
import CustomHouse from '../images/Custom House.jpg'
import Newgrange from '../images/Newgrange.jpg'

function HomeCarousel(){
    return(
        <div className="home-carousel">
			<Carousel interval={2500}>
				<Carousel.Item>
					<img className="d-block w-100" src={RocheCastle} title="Roche Castle" alt="Roche Castle"></img>
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