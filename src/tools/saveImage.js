import html2canvas from 'html2canvas';
import * as moment from 'moment';

/**
 * html2canvas下载图片
 * @param {HTMLElement} container
 * @param {string} format 下载图片格式
 */
export const saveImage = (container, format = 'jpg') => {
  // 先滚动到顶部，否则生成图片存在空白
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;  // 兼容safari老版本
  const date = moment().format('YYYY-DD-MM');
  html2canvas(container).then(
    (canvas) => {
      let img = document.createElement('a');
      img.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      img.download = `${date}.${format}`;
      img.click();
    }
  )
}
