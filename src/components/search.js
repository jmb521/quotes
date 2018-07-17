import React, {Component} from 'react'



class Search extends Component {
  submitForm = (e) => {
    console.log(e)
  }

  render() {
    return(
      <div>
      <form onsubmit="submitForm()">
        <label>Search</label>
        <br />
        <input type="text" name="search_term" />
        <br />
        <input type="submit" name="Search" />
      </form>
    </div>
  )}


}

export default Search
