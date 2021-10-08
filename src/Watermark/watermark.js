import React, { Fragment } from 'react';
import ReactImageProcess from './index';
import swal from 'sweetalert';
import { name } from '../../package.json';

import demoImg from './display_picture.jpg';
import waterMarkpng from './watermark.png';

export default class WaterMark extends React.PureComponent {
  render() {
    
    return (
      <Fragment>
        
        <h2>waterMark</h2>
        <ReactImageProcess
          mode="waterMark"
          waterMarkType="image"
          waterMark={waterMarkpng}
          width={60}
          height={60}
          opacity={0.7}
          coordinate={[850, 100]}
        >
          <img
            width="250px"
            height="250px"
            src={demoImg}
            alt="waterMark"
            className="example-img"
            onClick={() =>
              swal({
                text: `
                  {
                    mode:'waterMark',
                    waterMarkType:'image'
                    waterMark={waterMark}
                    width:60
                    height:60
                    opacity:0.8
                    coordinate:[330, 300]
                  }
                `
              })
            }
          />
        </ReactImageProcess>
        <ReactImageProcess
          mode="waterMark"
          waterMarkType="text"
          waterMark={name}
          fontBold={false}
          fontSize={20}
          fontColor="#396"
          coordinate={[10, 20]}
        >
          <img
          width="250px"
            height="250px"
            src={demoImg}
            alt="waterMark"
            className="example-img"
            onClick={() =>
              swal({
                text: `
                  {
                    mode:'waterMark',
                    waterMarkType:'text'.
                    waterMark={${name}}.
                    fontBold:false,
                    fontSize:30
                    fontColor:"#396"
                    coordinate:[10,20]
                  }
                `
              })
            }
          />
        </ReactImageProcess>
      </Fragment>
    );
  }
}