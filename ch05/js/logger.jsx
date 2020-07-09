class Logger extends React.Component{

  constructor(props){
    super(props);
    console.log('constructor');
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps');
    console.log('new props : ', newProps);
  }

  shouldComponentUpdate(newProps, newState){
    console.log('shouldComponentUpdate');
    console.log('new props : ', newProps);
    console.log('new State : ', newState);
    return true;
  }

  componentWillUpdate(newProps, newState){
    console.log('componentWillUpdate');
    console.log('new props : ', newProps);
    console.log('new State : ', newState);
  }

  componentDidUpdate(oldProps, oldState){
    console.log('componentDidUpdate');
    console.log('old Props : ', oldProps);
    console.log('oldState : ', oldState);
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render(){
    return <div>{this.props.time}</div>
  }
}
