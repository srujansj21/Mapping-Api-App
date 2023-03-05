import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
   
    <div className="navbar">
      <nav className="navdiv" style={{backgroundColor: "#A52A2A",
    fontFamily:"calibri", 
    paddingRight:"15px",
    paddingLeft:"15px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
    }}>
      <a style={{fontSize:"35px", fontWeight:"600", color:"white"}}>MapUp</a>
      <ul >
        <li style={{listStyle:"none", display:"inline-block", marginRight:"25px", color:"white", fontWeight:"bold", fontSize:"18px"}}><a >Home</a></li>
        <li style={{listStyle:"none", display:"inline-block", marginRight:"25px", color:"white", fontWeight:"bold", fontSize:"18px"}}><a >Profile</a></li>
        <li style={{listStyle:"none", display:"inline-block", marginRight:"25px", color:"white", fontWeight:"bold", fontSize:"18px"}}><a >Contact us</a></li>
        <li style={{listStyle:"none", display:"inline-block", marginRight:"25px", color:"white", fontWeight:"bold", fontSize:"18px"}}><a >SignUp</a></li>
        <button style={{listStyle:"none", display:"inline-block", marginRight:"25px", backgroundColor:"black",marginLeft:"10px",borderRadius:"10px",padding:"10px",width:"90px",color:"white", fontWeight:"bold",fontSize:"15px" }}><a >LogIn</a></button>
        
      </ul>
      </nav>
    <div
      
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
       
        
      }}
    >
      <div style={{ width: "120vw", height: "100%" }}>
        <Maps selectPosition={selectPosition} />
      </div>
      <div style={{ width: "50vw" }}>
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
    </div>
  );
}

export default App;