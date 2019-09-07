import {GETWEATHERDETAIL,GETCURRENTCITYWEATHER,SHOWERROR} from '../actionTypes' 

const Weatherstate={
    WeatherData:'',
    WeatherDesc:'',
    CurrentCityWeatherData:'',
    CurrentCityWeatherDesc:'',
    error:''
}
const Weatherreducer = ( state = Weatherstate, action ) => {
    switch (action.type) {
    case GETWEATHERDETAIL:
        return {
            ...state,
            WeatherData:action.response,
            WeatherDesc:action.response.weather[0].main,
            error:''

        }
    case GETCURRENTCITYWEATHER:
    return {
        ...state,
            CurrentCityWeatherData:action.response,
            CurrentCityWeatherDesc:action.response.weather[0].main,
            error:''

    }
    case SHOWERROR:
    return {
        ...state,
        error:'Please Enter Correct City'
    }
 

    default:
    return state;

    }

}
export default Weatherreducer;