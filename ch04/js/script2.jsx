const HelloWorld = function(props){
      return <h1 title={props.title} id={props.id}>Hello {props.frameworkName} world !!! </h1>;
}

function Link(props){
  return <a href={props.href} target="_blank" className="btn btn-primary">{props.text}</a>
}

const HelloWorld2 = (props) =>{
  return <h1 title={props.title} id={props.id}>Hello {props.frameworkName} world !!! </h1>;
}

const Link2 = (props) => <a href={props.href} target="_blank" className = "btn btn-primary">{props.text} </a>

ReactDOM.render(
  <div>
    <HelloWorld title="test" id="kblack.lee" frameworkName="react"/>
    <HelloWorld2 title="test2" id="kblack.lee" frameworkName="react2"/>
    <Link text="Buy React Quickly" href="https://www.manning.com/books/react-quickly" />
    <Link text="Buy React Quickly2" href="https://www.manning.com/books/react-quickly" />
  </div>,
  document.getElementById('content')
);
