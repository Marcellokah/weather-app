import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="paratemer-value">16°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="paratemer-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="paratemer-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="paratemer-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;