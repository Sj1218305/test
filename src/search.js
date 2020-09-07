'use strict';

// import  '../css/search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: false
    };
  }
  render() {
  
  return (
  	<div className="search-input">
	<i class="fas fa-search-dollar search-icon"></i>
	<input type="text"/>
	</div>
	);
}
}


let domContainer = document.querySelector('#search_container');
ReactDOM.render(<Search />, domContainer);