import React from 'react'
import {Button} from '../ButtonElement';
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    MainContatiner,
    MainRow,
    MainWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from './mainElements';
import {useHistory} from "react-router-dom";
//  import program1 from '../../images/program1.png';
//  import program2 from '../../images/program2.png';
const MainSection = ({
                         lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         headLine,
                         darkText,
                         description,
                         buttonLabel,
                         alt,
                         img,
                         primary,
                         dark,
                         dark2
                     }) => {

    const history = useHistory();

    const routeChange = () => {
        let path = '/signin';
        history.push(path);
    }
    return (
        <>
            <MainContatiner lightBg={lightBg} id={id}>
                <MainWrapper>
                    <MainRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                            smooth={true}
                                            duration={500}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                            onClick={routeChange}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap onClick={(prevState) => !prevState}>
                                <Img
                                    src={img}
                                    alt={alt}
                                />
                            </ImgWrap>
                        </Column2>
                    </MainRow>
                </MainWrapper>
            </MainContatiner>
        </>
    );
};

export default MainSection;
