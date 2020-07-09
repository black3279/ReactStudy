class Note extends React.Component{
  confirmLeave(e) {
    let confirmationMessage = '정말 닫으시겠습니까?'
    e.returnValue = confirmationMessage
    return confirmationMessage
  }
  componentDidMount(){
    console.log('등록');
    window.addEventListener('beforeunload', this.confirmLeave)
  }
  componentWillUnmount(){
    console.log('삭제');
    window.removeEventListener('beforeunload', this.confirmLeave)
  }
  render(){
    return <div>
        <p>부모 컴포넌트는 {this.props.secondsLeft} 초 뒤에 제거된다.</p>
      </div>
  }
}

let secondsLeft = 5

let interval = setInterval( () => {
  if(secondsLeft==0){
    ReactDOM.render(
      <div>
        Note was removed after {secondsLeft} seconds.
      </div>,
      document.getElementById('content')
    )
    clearInterval(interval)
  } else {
    ReactDOM.render(
      <div>
       <Note secondsLeft={secondsLeft}/>
      </div>,
      document.getElementById('content')
    )
  }
  secondsLeft--
}, 1000)
