import React from "react";
import {convertToImage} from '../tools/convertToImage';
import {saveImage} from "../tools/saveImage";
import CustomTable from "./customTable/CustomTable";
import convivaLogo from '../static/img/conviva-logo-white.svg';

const Html2canvas = () => {

    const onExportPNG = async () => {
        const img = await convertToImage(document.querySelector("#capture"));
        document.body.append(img);
    };

    const downloadImage = async () => {
        await saveImage(document.querySelector('#capture'), 'jpeg');
    };

    return (
        <>
            <div id="capture" style={{padding: '10px', backgroundColor: '#282c34'}}>
                <img src={convivaLogo} alt={''}/>
                <p>2022/12/02 Daily Monitor</p>
                <p>team: 兰剑、童旭平、宋勇南</p>
                <CustomTable/>
            </div>
            <button onClick={onExportPNG}>预览图片</button>
            <button onClick={downloadImage}>下载图片</button>
        </>
    )
}

export {
    Html2canvas
}