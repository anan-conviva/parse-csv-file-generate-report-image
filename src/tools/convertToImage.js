import html2canvas from 'html2canvas';
import Canvas2Image from './canvas2image';

/**
 * 基础版快照方案
 * @param {HTMLElement} container
 * @param {object} options html2canvas相关配置
 */
export function convertToImage(container, options = {dpi: window.devicePixelRatio}) {
    return html2canvas(container, options).then(canvas => {
        return Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
    });
}