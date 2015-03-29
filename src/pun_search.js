var PunSearch = React.createClass({
  handleSearch: function(){
    var query = this.refs.search.getDOMNode().value.trim();
    this.props.onSearch(query);
  },
  render: function(){
    return(
      <input type="text" placeholder="Search Puns!" onChange={this.handleSearch} ref="search"/>
    );
  }
});
