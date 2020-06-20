import * as ReactPaginate from 'react-paginate'
/**
 * [doc](https://www.npmjs.com/package/react-paginate)
 */
const setting = {
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 3,
  disableInitialCallback: true,
  previousLabel: 'Trang trước',
  nextLabel: 'Trang tiếp',
  containerClassName: 'pagination',
  pageClassName: 'page-item',
  pageLinkClassName: 'page-link',
  activeClassName: 'active',
  previousClassName: 'page-item',
  nextClassName: 'page-item',
  previousLinkClassName: 'page-link',
  nextLinkClassName: 'page-link',
  breakLabel: <a href="#">...</a>,
  hrefBuilder: () => {
    return '#'
  },
}

export default ({ onPageChange, total, perPage, initialPage = 0 }) => {
  let page = Number(initialPage)

  return (
    <ReactPaginate
      {...setting}
      onPageChange={onPageChange}
      pageCount={Math.ceil(total / perPage)}
      initialPage={page === 0 ? page : page - 1}
    />
  )
}
