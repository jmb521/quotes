import React from 'react'



const Search = (props) => {


    return(
      <div>
      <form onSubmit={props.submitForm}>
        <label>Search</label>
        <br />
        <input type="text" name="search_term" value={props.value} onChange={props.handleOnChange}/>
        <input type="submit" name="Submit" value="Search"/>
      </form>
    </div>
  )


}

export default Search
