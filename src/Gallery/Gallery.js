import React from 'react';
import styled from 'styled-components';
import UserGrid from '../Profile/UserGrid';
import Posts from '../Posts';
import {
    Link,
    useLocation
  } from "react-router-dom";

import {Image} from '../App';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap:20px;
`;


export function Gallery() {
    let location = useLocation();
  
    return (
      <div>
        <UserGrid />
        <PhotoGrid>
          {Posts.map(i => (
            <Link
              key={i.id}
              to={{
                pathname: `/img/${i.id}`,
                // This is the trick! This link sets
                // the `background` in location state.
                state: { background: location }
              }}
            >
              <Image index={i.id} />
              <p>{i.title}</p>
            </Link>
          ))}
        </PhotoGrid>
      </div>
    );
  }
  