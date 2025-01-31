import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas.ts';
import { configureStore, Store } from '@reduxjs/toolkit';
import { patientsReducer } from './patients/patients.slice.ts';

export const initStore = (): Store => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            patients: patientsReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
        devTools: process.env.NODE_ENV === 'development' //Explicitly enable tools for development

    });

    sagaMiddleware.run(rootSaga);
    return store;
};
