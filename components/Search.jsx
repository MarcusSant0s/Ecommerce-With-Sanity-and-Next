import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
 function test(){console.log('Yeah');}
  return (

  <form action={test}>

    <input type="text" name="name" />
    <button type="submit">
       <IoIosSearch />
     </button>
  
  </form>

  )
}

export default Search