import React, {Component} from 'react'

class Quotes extends Component {

  fetchQuotes = () => {
    fetch('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/b191cf3b6ea9cdcca8b363516ff969261398061f/quotes.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  componentDidMount() {
    this.fetchQuotes()
  }

  render() {
    return(
      <div>
        
      </div>
    )
  }
}

export default Quotes
