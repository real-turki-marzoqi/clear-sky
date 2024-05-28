import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { useTranslation } from "react-i18next";
import Footer from "./footer";

let cancelAxios = null;

const HomePage = () => {
    const { t, i18n } = useTranslation();

    const [apiData, setApiData] = useState({
        temp: null,
        maxTemp: null,
        minTemp: null,
        description: null,
        name: null,
        icon: null
    });

    const [dateAndTime, setDateAndTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    const [city, setCity] = useState({ lon: 33.616740, lat: 40.599640 });

    const [language, setLanguage] = useState("en");

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (cancelAxios) {
                cancelAxios();
            }
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=67973eec1e642e298cc6897a052ae96d`, {
                    cancelToken: new axios.CancelToken((c) => {
                        cancelAxios = c;
                    })
                });

                const responseTemp = Math.round(response.data.main.temp - 273.15);
                const responseMinTemp = Math.round(response.data.main.temp_min - 273.15);
                const responseMaxTemp = Math.round(response.data.main.temp_max - 273.15);
                const description = response.data.weather[0].description;
                const icon = response.data.weather[0].icon;
                const name = response.data.name;

                setApiData({
                    temp: responseTemp,
                    minTemp: responseMinTemp,
                    maxTemp: responseMaxTemp,
                    description: description,
                    name: name,
                    icon: icon
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchWeatherData();

        const intervalId = setInterval(() => {
            setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

        return () => {
            if (cancelAxios) cancelAxios();
            clearInterval(intervalId);
        };
    }, [city]);

    const updateCity = (lat, lon) => setCity({ lat, lon });

    return (
        <>
            <Row className="btn-space">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Button onClick={() => updateCity(40.599640, 33.616740)} className="costum-btn" variant="outline-dark">{t("Çankırı")}</Button>
                    <Button onClick={() => updateCity(21.485811, 39.192505)} className="costum-btn" variant="outline-dark">{t("Jeddah")}</Button>
                    <Button onClick={() => updateCity(24.471153, 39.611122)} className="costum-btn" variant="outline-dark">{t("Medina")}</Button>
                    <Button onClick={() => updateCity(21.389082, 39.857910)} className="costum-btn" variant="outline-dark">{t("makkah")}</Button>
                    <Button onClick={() => updateCity(41.01384, 28.94966)} className="costum-btn" variant="outline-dark">{t("Istanbul")}</Button>
                    <Button onClick={() => updateCity(39.91790000, 32.86268000)} className="costum-btn" variant="outline-dark">{t("ankara")}</Button>
                    <Button onClick={() => updateCity(31.886024, 35.170442)} className="costum-btn"variant="outline-dark">{t("beitunia")}</Button>
                    <Button onClick={() => updateCity(40.95207000, 32.54604000)} className="costum-btn" variant="outline-dark">{t("eskipazar")}</Button>
                    <Button onClick={() => updateCity(31.669009, 36.306034)} className="costum-btn" variant="outline-dark">{t("amman")}</Button>
                </Col>
            </Row>

            <div className="main">
                <Container>
                    <Row>
                        <Col className="center" lg={4} md={4} sm={12} xs={12}>
                            <h1 style={{color:"white"}}>{t(apiData.name)}</h1>
                        </Col>
                        <Col className="center" lg={8} md={8} sm={12} xs={12}>
                            <h4 style={{color:"white"}}>{dateAndTime}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Row>
                                <Col className="center" lg={6} md={6} sm={6} xs={6}>
                                    <img className="img" src={`https://openweathermap.org/img/wn/${apiData.icon}@2x.png`} alt="weather icon"/>
                                </Col>
                                <Col className="center" lg={3} md={3} sm={3} xs={3}>
                                    <h1 style={{color:"white"}} className="texts">{apiData.temp}°</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="center" lg={12} md={12} sm={12} xs={12}>
                                    <p>{t(apiData.description)}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <img className="img2" src={`https://openweathermap.org/img/wn/${apiData.icon}@2x.png`} alt="weather icon"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center" lg={12} md={12} sm={12} xs={12}>
                            <p>{t("Maximum")}: {apiData.maxTemp}</p>
                            <p>|</p>
                            <p>{t("Minimum")}: {apiData.minTemp}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col >
                        <Button className="lanb" onClick={() => setLanguage("en")} variant="outline-dark">English</Button>
                        <Button className="lanb2" onClick={() => setLanguage("ar")} variant="outline-dark">العربيه</Button>
                    </Col>
                </Row>
            </Container>

           
        </>
    );
};

export default HomePage;
