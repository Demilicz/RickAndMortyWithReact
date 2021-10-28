import { Link } from "react-router-dom";

export default function LinksAndDescribe() {

  return <div>
    <div style={{padding: "24px 0 17px 0"}}>
      <Link style={{
        margin: "24px 80px 17px 140px",
        fontSize: 16,
        color: "#11B0C8",

      }} to="/">All Characters</Link>

      <Link style={{
        fontSize: 16,
        color: "#11B0C8",
      }} to="/Favorites">Favorites</Link>
    </div>
    <div style={{
      display: "flex",
      padding: "16px 0",
      background: "rgba(229, 234, 244, 0.25)",
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 16,
      color: "#A9B1BD"
      }}>

      <p style={{marginLeft: 25}}>Photo</p>
      <p style={{marginLeft: 120}}>Character ID</p>
      <p style={{marginLeft: 120}}>Name</p>
      <p style={{marginLeft: 153}}>Gender</p>
      <p style={{marginLeft: 152}}>Species</p>
      <p style={{marginLeft: 149}}>Last Episode</p>
      <p style={{marginLeft: 116}}>Add to Favorite</p>
    </div>
  </div>

}