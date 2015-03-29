var App = React.createClass({
  handlePunSubmit: function(new_pun){
    var puns = this.state.puns;
    puns.push(new_pun);
    this.state.puns = puns;
    this.setState(this.state);
    localStorage.setItem('puns', JSON.stringify(puns));
  },

  searchPuns: function(searchTerm){
    this.state.displayed_puns = this.state.puns.filter(function(pun){
      return pun.content.indexOf(searchTerm) !== -1;
    });
    this.setState(this.state);
  },

  getInitialState: function() {
    var stored_puns = localStorage.getItem('puns');
    if(stored_puns){
      puns = JSON.parse(stored_puns);
    }else{
      puns = [];
    }
    return {puns:puns, displayed_puns: puns};
  },

  render: function(){
    return(
      <div>
        <PunSearch onSearch={this.searchPuns}/>
        <PunList puns={this.state.displayed_puns}/>
        <NewPun onSubmit={this.handlePunSubmit}/>
      </div>
    );
  }
});
