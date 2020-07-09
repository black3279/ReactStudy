
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.launchClock();
    this.state = {
      counter:0,
      currentTime: (new Date()).toLocaleString()
    }
  }
  launchClock(){
    setInterval( () => {
      console.log('Updating time ...')
      this.setState({
        counter: ++this.state.counter,
        currentTime : (new Date()).toLocaleString()})
    }, 1000)
  }
  render() {
    if(this.state.counter > 2) return <div/>;
    return <Logger time={this.state.currentTime}></Logger>
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
);
