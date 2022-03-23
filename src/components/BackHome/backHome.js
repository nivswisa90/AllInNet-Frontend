import React, { useState } from 'react'
import Video from '../../media/videos/video.mp4'
import { Button } from '../ButtonElement';
import { 
    BackHomeContainer, 
    HomeBg, 
    VideoBg, 
    HomeContent, 
    HomeH1, 
    HomeP, 
    HomeBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './backHomeElements';
import { useHistory } from "react-router-dom";

const BackHomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const history = useHistory(); 
    const routeChange = () =>{ 
      let path = '/signin'; 
      history.push(path);
    }
  return (
    <BackHomeContainer id="home">
        <HomeBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HomeBg>
        <HomeContent>
            <HomeH1> All In Net </HomeH1>
            <HomeP>
                Improve Your Shots
            </HomeP>
            <HomeBtnWrapper>
                <Button to='signup' onMouseEnter={onHover}
                onMouseLeave={onHover}
                onClick={routeChange}
                primary= 'true'
                dark= 'true'
                >
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>} 
                </Button>
            </HomeBtnWrapper>
        </HomeContent>
    </BackHomeContainer>
  )
}

export default BackHomeSection;