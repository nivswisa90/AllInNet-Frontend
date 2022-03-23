import React from 'react'
import ProgramCard from './programCard'
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import {Container} from '@material-ui/core'
//import Container from './TrainingProgElements'


const DisplayPrograms = (programs) => {

    let programsArray = Object.values(programs)

    return (
        <div>
            <Container style={{width: '60vh', height: '55vh'}} fixed maxWidth="sm">
                <Carousel
                    fullHeightHover={true}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'cornflowerblue',
                            borderRadius: 1
                        }
                    }}
                    navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                        style: {
                            bottom: '0',
                            top: 'unset'
                        }
                    }}
                    NextIcon='next'
                    PrevIcon='prev'
                >
                    {
                        programsArray[0].map((program, index) => (
                            < ProgramCard key={program.id} index={index} program={program}
                                          length={programsArray[0].length} style={{flexWrap: 'wrap'}}/>
                        ))
                    }
                </Carousel>
            </Container>
        </div>
    )
}
export default DisplayPrograms