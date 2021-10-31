import ReactPaginate from 'react-paginate';

export default function Pagination() {

  return (
    <div style={{
      borderBottom: "1px solid #A9B1BD"
    }}>
      <ReactPaginate
        nextLabel={">"}
        previousLabel={"<"}
        pageCount={15}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}

        // onPageChange={HandlePageLink}

        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-prev page-item page-link'}
        nextClassName={'page-next page-item page-link'}
        breakLinkClassName={'page-item'}
        activeClassName={'page-active'}
      />
    </div>
  )

}