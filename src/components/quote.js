import React from 'react'
const Quote = (props) =>  {

  return(

    <tbody key={props.k}>
      <tr key={props.k}>
        <td style={{width: 600+'px'}} key={props.k}>{props.quotes.quote}</td>
        <td key={props.k}>{props.quotes.context}</td>
        <td key={props.k}>{props.quotes.source}</td>
        <td key={props.k}>{props.quotes.theme}</td>
      </tr>
    </tbody>

  )
}

export default Quote
