import React from 'react';
import styled, {css} from 'styled-components';
import UserGrid from '../Profile/UserGrid';
import Posts from '../Posts';
import {
    Link,
    useLocation
  } from "react-router-dom";


export const ImageLink = styled(Link)`
  background: no-repeat center/150% url(/img/${({index}) => index}.jpeg);
  background-size: cover;
  :hover {
      opacity: .7
    }
  ${({cascade}) => cascade && css`
    background-size: cover;
    &:nth-of-type(2n) {
        grid-row-start: span 2;
    }
  `}
  
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap:20px;
  grid-auto-rows: 305px;
  ${({cascade}) => cascade && css`
    grid-auto-rows: 200px;
  `}
  @media (max-width: 990px){
    gap: 5px;
    padding-left: 25px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw - 10px);
    }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const TabLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({selected}) => selected && 'color: black;'}
`;

export function Gallery() {
    let location = useLocation();  
    const cascade = location.search === '?type=cascade';
    return (
      <div>
        <UserGrid />
        <LinkGrid>
            <TabLink selected={!cascade} to={{pathname: `${location.pathname}`, search:"?type=square"}} >Square</TabLink>
            <TabLink selected={cascade} to={{pathname: `${location.pathname}`, search:"?type=cascade"}}>Cascade</TabLink>
        </LinkGrid>
        <PhotoGrid>
          {Posts.map(i => (
            <ImageLink
              key={i.id}
              index={i.id}
              to={{
                pathname: `/img/${i.id}`,
                // This is the trick! This link sets
                // the `background` in location state.
                state: { background: location }
              }}
              cascade={cascade}
            >
              <p>{i.title}</p>
            </ImageLink>
          ))}
        </PhotoGrid>
      </div>
    );
  }
  