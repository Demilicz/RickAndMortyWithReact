import { useState, useEffect } from "react"

type Paginate = string | number;


export default function Pagination (props: {pages: number, setPage: React.Dispatch<React.SetStateAction<number>>, page:number}) {


  const numberOfPages: Array<Paginate> = [] ;


  for (let i = 1; i <= props.pages; i++) {
    numberOfPages.push(i);
  }


  const [currentButton, setCurrentButton] = useState<number>(props.page);

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<Paginate[]>([1, 2, 3, 4, '...', numberOfPages.length]);


  const cheakButton = (item: Paginate) => {


    const arrHandler = function(arr: Array<Paginate>): Array<number> {

          let newArray: Array<number>  = [];

          arr.forEach( (item: Paginate) => {
            if(typeof item === 'number') {
              newArray.push(item);
            }
          })

          return newArray;
        }


    if(typeof item === "number") {
      setCurrentButton(item)
    }
    if (typeof item === "string") {
        if(item === "...") {
          let newArray = arrHandler(arrOfCurrButtons);
          setCurrentButton(newArray[newArray.length-2] + 1)
        }
        else if (item  === " ...") {
          let newArray = arrHandler(arrOfCurrButtons);
          setCurrentButton(newArray[2] + 2)
        }
        else if (item  === "... ") {
          let newArray = arrHandler(arrOfCurrButtons);
          setCurrentButton(newArray[2] - 2)
        }
    }
  }

  useEffect(() => {
    setCurrentButton(Number(localStorage.getItem('currentButton')));
  } , []);


  useEffect(() => {
    window.localStorage.setItem('currentButton', String(currentButton));

  }, [currentButton]);


  useEffect(() => {

    let tempNumberOfPages: Array<Paginate> = [...arrOfCurrButtons];
    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    }

    else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
    }

    else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5)
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
    }

    else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {

      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)                 // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)                 // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]) // [1, '...', 4, 5, 6, '...', 10]
    }

    else if (currentButton > numberOfPages.length - 3) {                 // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4)       // slice(10-4)
      tempNumberOfPages = ([1, dotsLeft, ...sliced])
    }

    setArrOfCurrButtons(tempNumberOfPages);

    props.setPage(currentButton);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentButton])


  return (
    <div style={{
      borderBottom: "1px solid #A9B1BD"
    }}>
      <ul className='pagination'>
        <li
          className={`page-item ${currentButton === 1 ? 'disabled' : ''}`}
          onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}>
          {"<"}
        </li>

        {arrOfCurrButtons.map(((item, index) => {
          return <li
                    key={index}
                    className={`page-item ${currentButton === item ? 'active' : ''}`}
                    onClick={() => cheakButton(item)}
                    >
                    {item}
                  </li>
        }))}


        <li
          className={`page-item ${currentButton === numberOfPages.length ? 'disabled' : ''}`}
          onClick= {() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1) }>
          {">"}
          </li>
      </ul>



    </div>

  )

}



