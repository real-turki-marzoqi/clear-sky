import { configureStore } from "@reduxjs/toolkit";
import weatherSliceReducer from "./weatherSlice";

export default configureStore({
    reducer: {
        weather: weatherSliceReducer
    }
});
