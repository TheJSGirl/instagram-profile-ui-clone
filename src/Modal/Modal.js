import React from 'react';
import Posts from '../Posts';
import {Image} from '../App';
import {
    useHistory,
    useParams
  } from "react-router-dom";

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
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>{image.title}</h1>
          <Image isModal index={image.id} />
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    );
  }