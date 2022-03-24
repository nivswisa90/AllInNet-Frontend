import styled from 'styled-components'

export const Table = styled.table`
    border: 1px solid black;
    text-align: center;
    width: 70%;
    height: 70%;
    margin: 0 auto;

    /* @media screen and (max-width: 300px) {
        margin: 0% auto;
        width: 80px;
        height: 80px;
    } */

`
export const TableRow = styled.tr`
    border: 1px solid black;
    text-align: center;
    font-family: 'Encode sans Expanded', sans-serif;

`
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TableH = styled.th`
    text-align: center;
    font-family: 'Encode sans Expanded', sans-serif;
    border: solid;
    border-top: none;
    border-width: 1px 0;
`
export const TableData = styled.td`
    text-align: "center";
    font-family: 'Encode sans Expanded', sans-serif;
    
`

export const TrainingResultPageH1 = styled.h1`
    font-size: 50;
    font-weight: 90 ;
    font-family: 'Encode sans Expanded', sans-serif;
    text-align: center;
    
`

export const TableBody = styled.tbody`
    font-family: 'Encode sans Expanded', sans-serif;
    text-align: center;
    
`
