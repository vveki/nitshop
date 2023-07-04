import React from "react";
import styled from 'styled-components'

const PrimaryDiv = styled.div`
border: 3px solid black;
width: ${props=> props.width ? props.width : '200px'};
color: ${props => props.primary ? 'green' : 'white'};
background-color: ${props => props.primary ? 'white' : 'green'};
padding: ${props=> props.padding ? props.padding : '20px'};
height: ${props=> props.height ? 'auto' : '300px'};
text-align: ${props=> props.textAlign ? props.textAlign : 'center'}
`

export default PrimaryDiv;