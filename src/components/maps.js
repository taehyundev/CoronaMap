import React, { Component } from 'react';

class Maps extends Component {
    //     var container = document.getElementById('map');
    // var options = {
    //     center: new kakao.maps.LatLng(36.82385366924311, 127.29662610855718),
    //     level: 13
    // };
    // var map = new kakao.maps.Map(container, options);//지도를 생성함.
    // getInfo() {
    //     // 지도의 현재 중심좌표를 얻어옵니다 
    //     var center = map.getCenter();
    //     // 지도의 현재 레벨을 얻어옵니다
    //     var level = map.getLevel();
    //     // 지도타입을 얻어옵니다
    //     var mapTypeId = map.getMapTypeId();
    //     // 지도의 현재 영역을 얻어옵니다
    //     var bounds = map.getBounds();
    //     // 영역의 남서쪽 좌표를 얻어옵니다
    //     var swLatLng = bounds.getSouthWest();
    //     // 영역의 북동쪽 좌표를 얻어옵니다
    //     var neLatLng = bounds.getNorthEast();
    //     // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
    //     var boundsStr = bounds.toString();
    //     var message = '위도 : ' + center.getLat() + '\n';
    //     message += '경도 : ' + center.getLng() + '\n';
    //     message += '지도 레벨 : ' + level + '\n';
    //     message += '지도 타입 : ' + mapTypeId + '\n';
    //     message += '지도의 남서쪽 좌표 : ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + '\n';
    //     message += '북동쪽 좌표 : ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + '\n';
    //     console.log(message);
    // }

    constructor(props) {
        super(props);
        this.state = {
            apikey: { kakao: process.env.REACT_APP_KAKAOMAP_API_KEY }
        }
    }
    render() {
        return (
            <div id={this.props.id}>
                {console.log('test')}
                <button onClick={function () {
                    // getinfo();
                }}>조회</button>
            </div>
        );
    }
}

export default Maps;