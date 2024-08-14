// weatherSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// #== Start fetchWeather Thunk ==#
export const fetchWeather = createAsyncThunk(
    "weatherApi/fetchWeather",
    async ({ lat, lon }) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67973eec1e642e298cc6897a052ae96d`
            );

            // Convert temperature from Kelvin to Celsius
            const responseTemp = Math.round(response.data.main.temp - 273.15);
            const responseMinTemp = Math.round(response.data.main.temp_min - 273.15);
            const responseMaxTemp = Math.round(response.data.main.temp_max - 273.15);
            const description = response.data.weather[0].description;
            const icon = response.data.weather[0].icon;
            const name = response.data.name;

            // Return the weather data
            return {
                temp: responseTemp,
                minTemp: responseMinTemp,
                maxTemp: responseMaxTemp,
                description: description,
                name: name,
                icon: icon
            };
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    }
);
// #-- End fetchWeather Thunk --#

// #== Start weatherApiSlice Definition ==#
const weatherApiSlice = createSlice({
    name: "weatherApi",
    initialState: {
        result: "empty",
        weather: {},
        isLoading: false
    },
    reducers: {
        // #== Start changeResult Reducer ==#
        changeResult: (state, action) => {
            state.result = "changed";
        },
        // #-- End changeResult Reducer --#
    },
    extraReducers(builder) {
        // #== Start Thunk States Handling ==#
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.isLoading = false;
            });
        // #-- End Thunk States Handling --#
    }
});
// #-- End weatherApiSlice Definition --#

// #== Start Export Actions and Reducer ==#
export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
// #-- End Export Actions and Reducer --#
