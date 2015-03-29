var NewPun = React.createClass({
  humanify: function(timestamp){
    return new Date(timestamp).toString();
  },
  handleSubmit: function(event){
    event.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();
    var tags = this.refs.tags.getDOMNode().value.split(',').map(function(tag){ return tag.trim(); });
    var timestamp = Date.now();
    if(content && content.length > 0){
      this.props.onSubmit({
        content: content,
        tags: tags,
        timestamp: timestamp,
        human_datetime: this.humanify(timestamp)
      });
    }
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter your pun here!" ref="content" />
        <input type="text" placeholder="Add your tags seperated by commas" ref="tags" />
        <input type="submit" value="New pun!" />
      </form>
    );
  }
});

