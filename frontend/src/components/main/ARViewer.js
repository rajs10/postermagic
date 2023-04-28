import React from 'react';
import { Entity, Scene } from 'aframe-react';

const ARViewer = () => {
    return (
        <div><h1>Ar viewer</h1>
            <Scene>
                <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 1, z: -5 }} />
            </Scene>
        </div>
    )
}

export default ARViewer