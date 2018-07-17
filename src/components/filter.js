import React from 'react'

class Filter extends Component {
  render() {
    return(

      <form onsubmit="filterQuotes">
        <select>
          <option name="games">Games</option>
          <option name="movies">Movies</option>
          </select>
      </form>
    )
  }
}

export default Filter
