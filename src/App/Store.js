import { configureStore } from "@reduxjs/toolkit";
import AppFeature from "./AppFeature";

const store = configureStore({
    reducer: {
        AppSlice: AppFeature
    }
})

export default store;