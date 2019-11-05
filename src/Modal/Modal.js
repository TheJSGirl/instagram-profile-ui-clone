import React from 'react';
import Posts from '../Posts';
import {Image} from '../App';
import {
    useHistory,
    useParams
  } from "react-router-dom";
import styled, {createGlobalStyle} from 'styled-components';
import { PostGrid, InfoGrid} from './PostGrid';
import {MiniUserGrid} from '../Profile/UserGrid';
import {ProfileImage} from '../Profile/ProfileImage';

const ModalStyled = styled.div`
    position: absolute;
    background: #fff;
    top: ${({top}) => top}px;
    left: 25%;
    right: 25%;
    padding: 15px;
    border: 2px solid #444;
    @media (max-width: 990px){
      left: 0;
      right: 0;
      top: ${({top}) => top}px;
      width: auto;
  }
    
`;

const OverflowHidden = createGlobalStyle`
  body {
      overflow: hidden;
  }
`;

export function Modal() {
    let history = useHistory();
    let { id } = useParams();
    let image = Posts[parseInt(id, 10)];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: "5000px",
          background: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <ModalStyled
            top={window.scrollY + (window.innerHeight/2) - 250}
        >
        <OverflowHidden />

        <PostGrid>
          <Image isModal index={image.id} />
          <InfoGrid>
            <MiniUserGrid>
              <ProfileImage mini />
              <h2>GridGallary</h2>
            </MiniUserGrid>
            <div>
              <h1>{image.title}</h1>
            </div>
            <div>45 Likes</div>
          </InfoGrid>
        </PostGrid>
        </ModalStyled>
      </div>
    );
  }