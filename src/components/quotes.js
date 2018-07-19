import React, {Component} from 'react'
import Quote from './quote.js'
import Search from './search.js'
import Filter from './filter.js'
class Quotes extends Component {
  constructor() {
    super()

    this.state = {
      allquotes: [],
      quotes: [],
      search: "",
      currentPage: 1,
      quotesPerPage: 15,
    }
  }
  componentDidMount() {
    this.fetchQuotes()
    this.allQuotes()
  }
  setQuote = (data) => {
    this.setState({
      allquotes: data,
    })
  }

  fetchQuotes = () => {
    return fetch('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/b191cf3b6ea9cdcca8b363516ff969261398061f/quotes.json')
      .then(function(response) {
        return response.json();
      })
      .then(data => this.setQuote(data))
  }

  submitForm = (e) =>  {
    e.preventDefault()
    this.searchQuotes()
  }

  searchQuotes = () => {
    const filtered = this.state.allquotes.filter((q) => {
      if(q.quote.includes(this.state.search)) {
        return q
      }
      else {
        return ""
      }
    })
    this.setState({
      quotes: filtered,
      currentPage: 1,
    })
    return filtered
  }

  handleOnChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  filterQuotes = (e) => {
    if(e.target.value === "") {
      this.setState({
        quotes: this.state.allquotes
      })
    }
    if (e.target.value === "games"){
      this.setState({
        quotes: this.state.allquotes.filter(f => f.theme === "games"),
        currentPage: 1,
      })
    }
    if (e.target.value === "movies") {
      this.setState({
        quotes: this.state.allquotes.filter(f => f.theme === "movies"),
        currentPage: 1,
      })
    }
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  allQuotes = () =>  {
    this.setState({
      quotes: this.state.allquotes
    })
  }

  render() {
    const Showquotes = () => {
      const indexOfLastQuote = this.state.currentPage * this.state.quotesPerPage
      const indexOfFirstQuote = indexOfLastQuote - this.state.quotesPerPage

      const currentQuotes = this.state.quotes.slice(indexOfFirstQuote, indexOfLastQuote);
      return currentQuotes.map((f, i) =>{
        return <Quote quotes={f} key={i} />
      })
    }

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(this.state.quotes.length / this.state.quotesPerPage); i++) {
     pageNumbers.push(i);
   }

   const renderPageNumbers = pageNumbers.map(number => {
     return (
       <li
         key={number}
         id={number}
         onClick={this.handleClick}
       >
         {number}
       </li>
     );
   });

    return(
      <div>
      <br />
      <Search submitForm={this.submitForm} handleOnChange={this.handleOnChange} value={this.state.search}/>
      <Filter filterquote={this.filterQuotes}/>
      <br />
      <br />
        <table>
        <thead>
        <tr>
          <th>Quote</th>
          <th>Context</th>
          <th>Source</th>
          <th>Theme</th>
        </tr>
        </thead>
        
        <Showquotes />
        </table>
        <ul id="page-numbers">
        {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default Quotes
