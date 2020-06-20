import * as slug from 'slug'
/*
tạo url seo
:ten-:id
tham số 1: tên (có dấu hoặc không dấu)
tham số 2: id (id của ten) (nếu có)
*/
export function formatUrlSeo(ten: string, id: number) {
  if (ten.length == 0) {
    console.error('Phải có tên')
    return ''
  }
  if (ten.length > 0) {
    ten = <string>slug(ten, '-').toLowerCase()
    if (id) {
      ten = ten + '-' + id
    }
    return ten
  }
  return ''
}

/*
get id của seo url
*/
export function getIDSeoUrl(url: string = '') {
  if (url.length === 0) {
    console.error('Phải có tên')
    return null
  }
  let array: string[] = url.split('-')
  return array[array.length - 1]
}
