import React from 'react'

const PlayAR = () => {
  return (
    <div>
      <a-scene embedded arjs>
      
      <a-video src="videoplayback.mp4"></a-video>
      <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>
    </div>
  )
}

export default PlayAR