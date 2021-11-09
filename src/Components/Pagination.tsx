import ReactPaginate from 'react-paginate';



export default function Pagination (props: {pages: number, setPage: React.Dispatch<React.SetStateAction<number>>}) {




  const changePage = (selectedItem: {selected: number}) => {

    props.setPage(selectedItem.selected + 1);


  };






  return (
    <div style={{
      borderBottom: "1px solid #A9B1BD"
    }}>
      <ReactPaginate
        nextLabel={">"}
        previousLabel={"<"}
        pageCount={props.pages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={changePage}
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
