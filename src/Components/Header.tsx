import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_SEARCH = gql`
query GetSearch($inputValue: String){
  characters(filter: {
    name: $inputValue
  }) {
    results {
      name
      id
      image
      gender
      species
      episode {
        episode
      }
    }
  }
}`;



function Header() {

  const [select, setSelect] = useState('name');
  const [inputValue , setInputValue] = useState('');

  const [getCharacter, {data, error, loading }] = useLazyQuery(GET_SEARCH, {
    variables: {
      select,
      inputValue
    }
  })

  console.log({data, error, loading });


  return <div className='header'>
    <div className='_icon-Group-24' style={{
      width: 240,
      height: 70,
      fontSize: 70,
      color: "rgba(17, 176, 200, 1)",
      margin: 32,
      marginLeft: 140,
      marginRight: 80
    }}>
    </div>
    <form action="" className="search_form">
      <label className="search_label">Search by</label>
      <select className="search_select" value={select} onChange={(e) => {setSelect(e.target.value) }}>
        <option value="name">name</option>
        <option value="gender">gender</option>
        <option value="status">status</option>
        <option value="species">species</option>
      </select>
      <input className="search_input" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>

      <button className="_icon-search_black_24dp search_button" onClick={(e) => {
        e.preventDefault();
        getCharacter();

      }
       }></button>
    </form>
  </div>

}

export default Header;