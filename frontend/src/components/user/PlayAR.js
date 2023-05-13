import { Entity } from "aframe-react";
import React from "react";
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';
import { Camera, Video } from "react-aframe-ar/dist/primitives";

const PlayAR = () => {
  return (
    <div>
      <Scene>
        {/* <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
        <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
        <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow /> */}
        {/* <Sky color="#ECECEC" /> */}
        <Text value="Hello world, react-aframe-ar!" align="center" position="0 2.3 -1.5" color="#7BC8A4" />
        <Camera preset="hiro" />
        <Video src="/globe-12487.mp4" />
        
      </Scene>
    </div>
  );
};

export default PlayAR;
