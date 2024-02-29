import React, { useEffect, useState } from "react";
import "./Weather.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataAsync } from "./features/weather/WeatherSlice";
import {
    WiCloudyGusts,
    WiHumidity,
    WiThermometer,
    WiSmallCraftAdvisory,
} from "react-icons/wi";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const Weather = () => {
    const [tempDegree, setTempDegree] = useState("F");
    const cityName = useSelector((state) => state.city.name);
    const data = useSelector((state) => state.weather.data);
    const spinner = useSelector((state) => state.weather.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAsync(cityName));
    }, [cityName, dispatch]);

    const handleChangeDegree = () => {
        if (tempDegree === "C") {
            setTempDegree("F");
        } else {
            setTempDegree("C");
        }
    };

    const override = css`
    display: block;
    width: fit-content;
    margin: 0 auto;
  `;

    return (
        <>
            {spinner ? (
                <BeatLoader size={18} margin={2} css={override} />
            ) : (
                <div className="current-weather desc">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2 className="sc-fzoyAV lCLbz">Текущая погода</h2>
                        <div>
                            <label className="convert-temp" onClick={handleChangeDegree}>
                                <span className={`${tempDegree === "F" ? "off" : "on"}`}>
                                    {tempDegree}
                                </span>
                                <div
                                    className="btn"
                                    style={
                                        tempDegree === "F"
                                            ? { transform: "translateX(0px)" }
                                            : { transform: "translateX(28px)" }
                                    }
                                />
                            </label>
                        </div>
                    </div>
                    <div className="content">
                        <div className="item1">
                            <h4>
                                {data.location && data.location.name}
                                <small>{data.location && data.location.country}</small>
                            </h4>
                            <div style={{ display: "flex" }}>
                                <img
                                    src={data.current && data.current.condition.icon}
                                    alt="condition-icon"
                                    className="icon"
                                />
                                <span>
                                    {tempDegree === "F"
                                        ? data.current && data.current.temp_c
                                        : data.current && data.current.temp_f}

                                    <sup>°</sup>
                                </span>
                            </div>
                            {/* <h3>{data.current && data.current.condition.text}</h3> */}
                        </div>
                        <div className="item2">
                            <p className="">
                                Ощущается как{" "}
                                {tempDegree === "F"
                                    ? data.current && data.current.feelslike_c
                                    : data.current && data.current.feelslike_f}
                                <sup>°</sup>
                            </p>

                            <div className="statist">
                                <div>
                                    <WiHumidity size={35} />
                                    Влажность
                                </div>
                                <span>{data.current && data.current.humidity}</span>
                            </div>
                            <div className="statist">
                                <div>
                                    <WiCloudyGusts size={35} />
                                    Ветер
                                </div>
                                <span>
                                    {tempDegree === "F"
                                        ? data.current && data.current.wind_kph
                                        : data.current && data.current.wind_mph}
                                    {tempDegree === "F" ? "км/ч" : "миль/ч"}
                                </span>
                            </div>
                            <div className="statist">
                                <div>
                                    <WiThermometer size={35} />
                                    Давление
                                </div>
                                <span>{data.current && data.current.pressure_mb}гПа</span>
                            </div>
                            <div className="statist">
                                <div>
                                    <WiSmallCraftAdvisory size={35} />
                                    Видимость
                                </div>
                                <span>{data.current && data.current.vis_km}Км</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Weather;
