import React from 'react';
import styled from 'styled-components';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
`;

const Label = styled.div`
    grid-area: label;
`;

const Description = styled.div`
    grid-area: description;
`;

export default function() {
    return <UserGridStyled> 
            <Photo>Photo</Photo>
            <Name>Name</Name>
            <Label>Label</Label>
            <Description>Description</Description>
         </UserGridStyled>;
}