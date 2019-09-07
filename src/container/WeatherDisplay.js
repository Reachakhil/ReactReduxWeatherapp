import React, { Component } from 'react';
import {getWeatherDetail,getCurrentCityWeather} from '../store/action/getWeatherDetail';
import { connect } from 'react-redux';
import CloudIcon from '@material-ui/icons/Cloud';
import axios from 'axios';
import '../container/WeatherDisplay.css'
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { number } from 'prop-types';
import { CircularProgress } from '@material-ui/core';






export  class WeatherDisplay extends Component {
    constructor(props) {

        super(props);
        this.state = {
            CityName:'',
            displayValue : 'SHOWS WEATHER'
        };	
        this.props.getCurretCityWeather();

    }
    
    
    componentDidMount () {
    }

    handleInputChange = ({target}) => {
        const name  = target;
		this.setState({
			[target.name] : target.value
		});
    }
    submitValue = () =>{
        let a = ''
        a=this.state.CityName
        this.props.getWeatherDetail(a);
    }
    

    renderSwitch(param) {
        switch(param) {
        case 'Clouds':
            return 'Clouds';
        case 'Clear':
            return 'Clear'
        case 'Haze':
            return 'Haze-mist';
        case 'Mist':
            return 'Haze-mist';
        case 'Rain':
            return 'rain';
        default:
            return 'Clouds';
        }
    }
    get_temp(temp){
        return (temp - 273.15).toFixed(2)
    }

    render() {
        const val= this.props.WeatherDesc
        const renderVal = this.renderSwitch(val)
        let showcurcityweather = this.props.CurrentCityWeatherData?
        <p>{this.get_temp(this.props.CurrentCityWeatherData.main.temp)}c</p>:<p><CircularProgress/></p>;
        let showWeather = this.props.WeatherData ? 
        <div className="weather-description">
        <p className="name">Place:{this.props.WeatherData.name}, Temprature: {this.get_temp(this.props.WeatherData.main.temp)} C</p>
        <p>{this.props.WeatherDesc}</p></div>:<p></p>;
        let showerror = this.props.error  ? <p>{this.props.error}</p>: <p></p>;
    
        return (
            <div className={renderVal}>
            <div className="header">
            <div className="header-left">SHOW WEATHER</div>
            <div className="header-right">Bangalore  <CloudIcon/> {showcurcityweather}</div>
            </div>
            <div className="Input">
            <p class="input-lable">Enter the City..</p>
                <Input 
                className="input-lable"
                autoFocus="true"
                margin="dense"
                placeholder="city" 
                type="text"
                name="CityName"
                value={this.state.CityName} 
                onChange = {this.handleInputChange} />
                <div>
            <Button variant="contained" value="Send"
            onClick={this.submitValue} color="primary">
        Submit
        </Button> 
            </div> 
            <h2> {showWeather}</h2> 
            <h2>{showerror}</h2>
            </div>
            </div>
        
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        WeatherData: state.WeatherData,
        WeatherDesc:state.WeatherDesc,
        CurrentCityWeatherData:state.CurrentCityWeatherData,
        error:state.error

    };
}

const mapDispatchToProps = dispatch => {
    return {
        getWeatherDetail: (coordinate) => dispatch(getWeatherDetail(coordinate)),
        getCurretCityWeather : () => dispatch(getCurrentCityWeather())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
