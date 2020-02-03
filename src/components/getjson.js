class ApiExample extends React.Component {
    constructor(props) {  
      super(props);  
      this.state = {  
        data: ''  
      }  
    }    
  
    callApi = () => {  
      fetch("https://jsonplaceholder.typicode.com/todos/1")  
        .then(res => res.json())  
        .then(json => {  
          this.setState({  
            data: json.title  
          })  
        })  
    }    
  
    componentDidMount() {  
      this.callApi();  
    }    
  
    render() {  
      return (  
        <h3>{this.state.data ? this.state.data : '데이터 불러오는 중'}</h3>  
      )  
    }  
  }

  ReactDOM.render(
    <ApiExample />, 
    document.getElementById('root')
  );