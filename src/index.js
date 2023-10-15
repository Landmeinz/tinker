import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './tests/reportWebVitals';
import './index.css';

import App from './components/App/App.jsx';
// import Loading from './components/Loading/Loading.jsx';
// import store from './redux/store';
// import persistor from './redux/store';
import store from './redux/store';

// const store = configObject.store;
// const persistor = configObject.persistor;

// const onBeforeLift = () => {
//     console.log('\n--- onBeforeLift');
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/* <PersistGate
            loading={<Loading />}
            onBeforeLift={onBeforeLift}
            persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
