
class ProfileLink extends React.Component{
  render(){
    return <a href={this.props.url} target="_blank">{this.props.label}</a>;
  }
}

ReactDOM.render(
  (
    <div>
      <ProfileLink url="http://reactquickly.co" label="Time for React?"/>
    </div>
  ),
  document.getElementById('content')
);
