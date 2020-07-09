let helloWorldReaectElement = <h1>Hello World!</h1>

class HelloWorld extends React.Component{
  render(){
    return <div>
    {helloWorldReaectElement}
    {helloWorldReaectElement}
    </div>
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('content'));
