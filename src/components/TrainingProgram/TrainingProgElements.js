import styled from 'styled-components';


export const Container = styled.div`
    min-height: 744px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #FAEBD7 0%,
        #DEB887 100%
    );

    @media screen and (max-width: 420px) {
        /* padding-top: 32px;
        margin: 0;
        //padding: 10px;
        width: 100%;
        padding: 100px 0;
     */
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const FirstDiv = styled.div`
    font-weight: bold;
    font-family: 'Encode sans Expanded', sans-serif;

      @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
    
    }

`
export const DivSection = styled.div`
    border: 1px solid black;
    width: 60vh;
    height: flex;
    margin: 0 auto;
    border-radius: 5px; 
    margin-top: "3vh";
    margin-left: "3vh";
    font-family: 'Encode sans Expanded', sans-serif;

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
    
    }

`
export const ProgramH3 = styled.h3`
    text-align: center;
    font-family: 'Encode sans Expanded', sans-serif;
    border: solid;
    border-top: none;
    border-width: 1px 0;
`
export const Paragraph = styled.p`
    //align-items: center;
    text-align: center;
`