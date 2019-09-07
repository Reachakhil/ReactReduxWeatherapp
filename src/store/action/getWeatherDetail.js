import {GETWEATHERDETAIL,GETCURRENTCITYWEATHER,SHOWERROR} from '../actionTypes'
import axios from 'axios'

export const getWeatherDetail = (place) =>{
    return dispatch => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=4c21e45fa6bcad5691d034cbef788451`)
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
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=bangalore&APPID=4c21e45fa6bcad5691d034cbef788451`)
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
