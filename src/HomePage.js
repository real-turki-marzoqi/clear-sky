import { Col, Container, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/weatherSlice";
import Spinner from "react-bootstrap/Spinner";

// #== Start HomePage Component ==#
const HomePage = () => {
  // #== Start Redux Hooks ==#
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.weather.isLoading);
  const apiData = useSelector((state) => state.weather.weather);
  // #-- End Redux Hooks --#

  // #== Start Translation Hooks ==#
  const { t, i18n } = useTranslation();
  // #-- End Translation Hooks --#

  // #== Start Local State ==#
  const [dateAndTime, setDateAndTime] = useState(
    moment().format("MMMM Do YYYY, h:mm")
  );
  const [city, setCity] = useState({ lon: 33.61674, lat: 40.59964 }); // Default value
  const [language, setLanguage] = useState("en");
  // #-- End Local State --#

  // #== Start useEffect for Fetching Weather and Language Change ==#
  useEffect(() => {
    // Dispatch the thunk to fetch weather data when the city or language changes
    dispatch(fetchWeather({ lat: city.lat, lon: city.lon }));
    i18n.changeLanguage(language);
  }, [city, language, dispatch, i18n]);
  // #-- End useEffect for Fetching Weather and Language Change --#

  // #== Start Update City Function ==#
  const updateCity = (lat, lon) => setCity({ lat, lon });
  // #-- End Update City Function --#

  return (
    <>
      {/* #== Start City Selection Buttons ==# */}
      <Row className="btn-space">
        <Col lg={12}>
          <Button
            onClick={() => updateCity(40.59964, 33.61674)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Çankırı")}
          </Button>
          <Button
            onClick={() => updateCity(21.485811, 39.192505)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Jeddah")}
          </Button>
          <Button
            onClick={() => updateCity(24.471153, 39.611122)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Medina")}
          </Button>
          <Button
            onClick={() => updateCity(21.389082, 39.85791)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Makkah")}
          </Button>
          <Button
            onClick={() => updateCity(41.01384, 28.94966)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Istanbul")}
          </Button>
          <Button
            onClick={() => updateCity(39.9179, 32.86268)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("ankara")}
          </Button>
          <Button
            onClick={() => updateCity(31.886024, 35.170442)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Baytūnyā")}
          </Button>
          <Button
            onClick={() => updateCity(40.95207, 32.54604)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Eskipazar")}
          </Button>
          <Button
            onClick={() => updateCity(31.669009, 36.306034)}
            className="costum-btn"
            variant="outline-light"
          >
            {t("Amman")}
          </Button>
        </Col>
      </Row>
      {/* #-- End City Selection Buttons --# */}

      <div className="main">
        {/* #== Start Weather Information Display ==# */}
        <Container>
          <Row>
            <Col className="center" lg={4}>
              {isLoading ? (
                <Spinner animation="border" variant="secondary" />
              ) : (
                <h4 style={{ color: "white", marginLeft: "3%" }}>
                  {t(apiData.name)}
                </h4>
              )}
            </Col>
            <Col className="center" lg={8}>
              <h6 style={{ color: "white" }}>{dateAndTime}</h6>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Row>
                <Col className="center" lg={6}>
                  <img
                    className="img"
                    src={`https://openweathermap.org/img/wn/${apiData.icon}@2x.png`}
                    alt="weather icon"
                  />
                </Col>
                <Col className="center" lg={3}>
                  <h1 style={{ color: "white" }} className="texts">
                    {apiData.temp}°
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col className="center" lg={12}>
                  <p>{t(apiData.description)}</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <img
                className="img2"
                src={`https://openweathermap.org/img/wn/${apiData.icon}@2x.png`}
                alt="weather icon"
              />
            </Col>
          </Row>
          <Row>
            <Col className="center" lg={12}>
              <p>
                {t("Maximum")}: {apiData.maxTemp}
              </p>
              <p>|</p>
              <p>
                {t("Minimum")}: {apiData.minTemp}
              </p>
            </Col>
          </Row>
        </Container>
        {/* #-- End Weather Information Display --# */}
      </div>

      {/* #== Start Language Selection Buttons ==# */}
      <Container>
        <Row>
          <Col>
            <Button
              className="lanb"
              onClick={() => setLanguage("en")}
              variant="outline-light"
            >
              English
            </Button>
            <Button
              className="lanb2"
              onClick={() => setLanguage("ar")}
              variant="outline-light"
            >
              العربية
            </Button>
          </Col>
        </Row>
      </Container>
      {/* #-- End Language Selection Buttons --# */}
    </>
  );
};
// #-- End HomePage Component --#

export default HomePage;
