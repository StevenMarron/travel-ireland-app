import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BoyneBridge from '../images/Boyne Bridge.jpg'
import DCC from '../images/DCC.jpg'
import DunNaRi from '../images/DunNaRi.jpg'
import Howth from '../images/Howth.jpg'
import Laytown from '../images/Laytown.jpg'
import RocheCastle from '../images/Roche Castle.jpg'

function HomeCarousel(){
    return(
        <div>
			<Carousel interval={2500}>
				<Carousel.Item>
					<Carousel.Caption>
					</Carousel.Caption>
					<img className="d-block w-100" src={BoyneBridge} title="Boyne Bridge" alt="Boyne Bridge"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={DCC} title="Dublin Convention Centre and Bridge" alt="DCC and Bridge"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={DunNaRi} title="Dun Na Ri" alt="Dun Na Ri"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Howth} title="Howth Lighthouse" alt="Howth Lighthouse"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Laytown} title="Laytown Voyager" alt="DCC and Bridge"></img>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={RocheCastle} title="Roche Castle" alt="Roche Castle"></img>
				</Carousel.Item>
			</Carousel>				
    	</div> 

    )
}

export default HomeCarousel