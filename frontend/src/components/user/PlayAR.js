import React from "react";
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

const PlayAR = () => {
  return (
    <div>
      <a-scene embedded arjs>
        <a-video src="videoplayback.mp4"></a-video>
        <a-marker-camera preset="hiro"></a-marker-camera>
      </a-scene>
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
    </div>
  );
};

export default PlayAR;
