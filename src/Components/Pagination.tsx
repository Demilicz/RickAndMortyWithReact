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
        previousClassName={'page-prev page-item'}
        nextClassName={'page-next page-item'}
        breakLinkClassName={'page-link page-item'}
      />
    </div>
  )

}