class HelloWorld extends React.Component{
  render(){
    return <h1 title={this.props.title} id={this.props.id}>Hello {this.props.frameworkName} world !!! </h1>;
  }
}

ReactDOM.render(
  <div>
    <HelloWorld id="ember" frameworkName="Ember.js" title="A framework for creating ambitious web applications. "/>
    <HelloWorld id="backborn" frameworkName="Backbone.js" title="Backbone.js gives structure to web applications..." />
  </div>,
  document.getElementById('content')
);
