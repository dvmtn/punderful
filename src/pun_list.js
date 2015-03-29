var PunList = React.createClass({
  render: function(){
    var puns = this.props.puns.map(function(pun){
      var tags = pun.tags.map(function(tag){
        return(<span className="tag">{tag}</span>);
      });
      return(
        <tr>
          <td>{pun.content}</td>
          <td>{tags}</td>
          <td>{pun.human_datetime}</td>
        </tr>
      );
    });

    return(
      <table className="puns">
        <tbody>
          {puns}
        </tbody>
      </table>
    );
  }
});
