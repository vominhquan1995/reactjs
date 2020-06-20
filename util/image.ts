import config from '../config/urlConfig';
import * as _ from 'lodash';

export function loadImage(url) {
  /* 
không có đường dẫn
*/
  if (_.isNil(url) || url.trim().length == 0) {
    return '';
  }

  /* 
  không có url_file và không phải chuỗi base64
  */
  if (['http://', 'https://'].every(x => url.indexOf(x) == -1) == true && url.indexOf('data:image') == -1) {
    return `${config.app.api_image}${url}`;
  }
  return url;
}