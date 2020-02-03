import React, { Component } from 'react';
import Crowling from './components/crowling';
import Floats from './components/floats';
import Maps from './components/maps';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: { id: 'map' },
      apikey: { kakao: process.env.REACT_APP_KAKAOMAP_API_KEY }
    }
  }
  componentDidMount() {
    const { kakao } = window;
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9a0a184be7e43c187ef39272a06c9bf6";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById('map');
        var map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(36.82385366924311, 127.29662610855718),
          level: 13
        });
      });
    }
  }
    render() {
      return (
        <div className="App">
          <Maps id={this.state.maps.id}></Maps>
          <Crowling></Crowling>
          <Floats></Floats>
        </div>
      );
    }
  }
  export default App;