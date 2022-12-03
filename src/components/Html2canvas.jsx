import React, {useCallback, useEffect, useRef} from "react";
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import { convertToImage } from '../tools/convertToImage';
import { saveImage } from "../tools/saveImage";
import CustomTable from "./customTable/CustomTable";

const Html2canvas = () => {

  const onClickHandle = useCallback(() => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);
    });
  }, []);

  const onExportPNG = async () => {
    const img = await convertToImage(document.querySelector("#capture"));
    document.body.append(img);
  };

  const downloadImage = async () => {
    await saveImage(document.querySelector('#capture'),'jpeg');
  };

  return (
    <>
      <div id="capture" style={{padding: '10px', background: '#f5da55'}}>
        <h4 style={{color: '#000'}}>Hackathon</h4>
        <h4 style={{color: '#abcdef', padding: '0 0 0 10px'}}>兰剑、童旭平、宋勇南</h4>
        <CustomTable/>
      </div>
      <hr/>
      <button onClick={onClickHandle}>渲染canvas</button>
      <button onClick={onExportPNG}>预览图片</button>
      <button onClick={downloadImage}>下载图片</button>
      <hr/>
    </>
  )
}

export {
  Html2canvas
}