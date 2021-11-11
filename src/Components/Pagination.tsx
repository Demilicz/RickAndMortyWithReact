import { useState, useEffect } from "react"

type Paginate = string | number;


export default function Pagination (props: {pages: number, setPage: React.Dispatch<React.SetStateAction<number>>, page:number}) {


  const numberOfPages: Array<Paginate> = [] ;

  for (let i = 1; i <= props.pages; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(props.page);

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<Paginate[]>([]);


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

    else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {               // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)                 // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)                 // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]) // [1, '...', 4, 5, 6, '...', 10]
    }

    else if (currentButton > numberOfPages.length - 3) {                 // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4)       // slice(10-4)
      tempNumberOfPages = ([1, dotsLeft, ...sliced])
    }

    // else if (currentButton === dotsInitial) {
    //   // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
    //   // arrOfCurrButtons[3] = 4 + 1 = 5
    //   // or
    //   // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
    //   // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
    //   setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1)
    // }
    // else if (currentButton === dotsRight) {
    //   setCurrentButton(arrOfCurrButtons[3] + 2)
    // }

    // else if (currentButton === dotsLeft) {
    //   setCurrentButton(arrOfCurrButtons[3] - 2)
    // }

    setArrOfCurrButtons(tempNumberOfPages);

    props.setPage(currentButton);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentButton])

console.log(currentButton);



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
                    // onClick={() => setCurrentButton(item)}
                    >

                    {item}
                  </li>
        }))}


        <li
          className={`page-item ${currentButton === numberOfPages.length ? 'disabled' : ''}`}
          onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}>
          {">"}
          </li>
      </ul>



    </div>

  )

}
