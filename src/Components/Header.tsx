
function Header() {

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
      <select className="search_select" >
        <option value="Name">Name</option>
        <option value="Identifier">Identifier</option>
        <option value="Episode">Episode</option>
      </select>
      <input className="search_input"/>
      <button className="_icon-search_black_24dp search_button"></button>
    </form>
  </div>
}

export default Header;