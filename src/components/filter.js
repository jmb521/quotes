import React from 'react'




const Filter = (props) => {
    return(
      <div>
        <select onChange={props.filterquote}>
          <option name="" value=""></option>
          <option name="games" value="games">Games</option>
          <option name="movies" value="movies">Movies</option>
        </select>

      </div>
    )

}

export default Filter
