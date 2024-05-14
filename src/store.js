import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { puppyBowlApi } from "./services/puppies";

export const store = configureStore({
    reducer: {
        [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(puppyBowlApi.middleware)
})

setupListeners(store.dispatch);