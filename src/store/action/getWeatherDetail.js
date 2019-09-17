import {GETWEATHERDETAIL,GETCURRENTCITYWEATHER,SHOWERROR} from '../actionTypes'
import axios from 'axios'
import * as constant from '../../constants';

export const getWeatherDetail = (place) =>{
    return dispatch => {
        axios.get(`${constant.API_URL}?q=${place}&APPID=${constant.APPID}`)
        .then( response => {
        dispatch(setWeatherData(response));
        } )
        .catch( error => {
            dispatch(setErrorData());
        } );
    };
    
};

export const getCurrentCityWeather = () =>{
    return  dispatch =>{
        axios.get(`${constant.API_URL}?q=${constant.CURRENT_CITY}&APPID=${constant.APPID}`)
        .then( response => {
        dispatch(setcurrentcityWeatherData(response));
        } )
        .catch( error => {
            // dispatch(setErrorData());
        } );
        
    };
};

export const setWeatherData = (response) =>{
return {
        type:GETWEATHERDETAIL,
        response:response.data
    }
}
export const setcurrentcityWeatherData = (response) =>{
return {
        type:GETCURRENTCITYWEATHER,
        response:response.data
    }
}

export const setErrorData = () =>{
    return {
        type:SHOWERROR
    }
}
