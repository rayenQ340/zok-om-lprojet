import { useState, useEffect, useCallback } from 'react';
import '../styles/Weatherforecast.css';
import SideNav from './sidenav';
import location from '../images/location.png';
import search from '../images/search.png';
import notif from '../images/notif.png';
import pers from '../images/pers.png';
import moment from 'moment';

function Weatherforcast() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [weather, setWeather] = useState({});
  const [sunriseTime, setSunriseTime] = useState('');
  const [sunsetTime, setSunsetTime] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const iconCode = weather.weather ? weather.weather[0].icon : '';

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather(searchKeyword);
    }
  };

  const fetchSevenDaysForecast = useCallback(() => {
    if (latitude && longitude) {
      const apiKey = 'd39b3901f250609f2e478bbe7ac487a9';
      const sevenDaysApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(sevenDaysApiUrl)
        .then((res) => res.json())
        .then((result) => {
          if (result.list) {
            // Filter the data to get one record per day (assuming data is every 3 hours)
            const dailyData = result.list.filter((item, index) => index % 8 === 0);
            setDailyForecast(dailyData);
          } else {
            console.log("Unexpected API response:", result);
          }
        })
        .catch((error) => {
          console.log("Error fetching seven days forecast:", error);
        });
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchSevenDaysForecast(); // Fetch seven days forecast based on the chosen location
    }
  }, [latitude, longitude, fetchSevenDaysForecast]);

  const fetchWeather = (searchTerm) => {
    const apiKey = 'd39b3901f250609f2e478bbe7ac487a9'; // Replace with your OpenWeather API key
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiKey}`;

    fetch(weatherApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        // Fetch air quality data after fetching weather data
        // fetchAirQuality(data.coord.lat, data.coord.lon); // Uncomment this line if you have a function for air quality
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (weather.sys && weather.sys.sunrise) {
      const sunriseTimestamp = weather.sys.sunrise;
      const sunriseTime = moment.unix(sunriseTimestamp).utcOffset(weather.timezone / 60).format('HH:mm a');
      setSunriseTime(sunriseTime);
    }
    if (weather.sys && weather.sys.sunset) {
      const sunsetTimestamp = weather.sys.sunset;
      const sunsetTime = moment.unix(sunsetTimestamp).utcOffset(weather.timezone / 60).format('HH:mm a');
      setSunsetTime(sunsetTime);
    }
  }, [weather]);

  return (
    <div className="bg">
      <SideNav />
      <div className="TopBarBg">
        <div className="search">
          <img src={search} alt="search" className="searchIcon" />
          <input
            type="text"
            placeholder="Global search"
            className="searchInput"
            value={searchKeyword}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="emo">
          <img src={notif} alt="notif" className="notif" />
        </div>
        <div className="notif">
          <img src={pers} alt="pers" className="pers" />
        </div>
      </div>
      <div className='card'>
        <div className="locationn">
          <img src={location} alt="location" />
        </div>
        <p className='kiy'>{searchKeyword}</p>
      </div>
      {iconCode && (
        <div className='iconn'>
          <img src={`http://openweathermap.org/img/w/${iconCode}.png`} alt="icon" />
        </div>
      )}
      {weather.main && (
        <div>
          <p className="noww">Now: {weather.main.temp}°C</p>
          <p className="todayy">
            <span className='maxx'>Today: {weather.main.temp_max}°C max</span>
            <span className='minn'> {weather.main.temp_min}°C min</span>
          </p>
          <div className="left-info">
            <p className="othr">Wind: {weather.wind ? weather.wind.speed : 'N/A'}m/s,</p>
            <p className="othr">Humidity: {weather.main.humidity}%,</p>
          </div>
          <div className='right-info'>
            {weather.clouds && 'clouds' in weather && <p className="other1">Cloudiness: {weather.clouds.all}%</p>}
          </div>
          <div className="cl">
            <div className='iconnn'>
              <img src={`http://openweathermap.org/img/w/${iconCode}.png`} alt="icon" />
            </div>
            <p className="nowww">Outdoor Temperture {weather.main.temp}°C</p>
          </div>
          <div className='sunni'>
            <p className="suni">Sunrise: {sunriseTime}</p>
          </div>
          <div className='sunns'>
            {sunsetTime && <p className="suns">Sunset: {sunsetTime}</p>}
          </div>
          <div className="seven-days-forecastt">
            <table className="daily-forecast-table">
              <thead>
                <tr>
                  <th className='dayyy'>Day</th>
                  <th className='dayyy'>Icon</th>
                  <th className='maxxx'>Max Temp</th>
                  <th className='minnn'>Min Temp</th>
                  <th className='hum'>Humidity</th>
                  <th className='win'>Wind</th>
                </tr>
              </thead>
              <tbody>
                {dailyForecast.map((day, index) => (
                  <tr key={index} className="day-forecast">
                    <td>{moment.unix(day.dt).format('dddd')}</td>
                    <td>
                      <img
                        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                        alt="icon"
                        className="weather-icon"
                      />
                    </td>
                    <td >{day.main.temp_max}°C</td>
                    <td>{day.main.temp_min}°C</td>
                    <td>{day.main.humidity}%</td>
                    <td>{day.wind.speed}m/s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weatherforcast;
