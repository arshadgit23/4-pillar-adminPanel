import { useState } from 'react';
import { registerCharts } from './components/registerCharts';
// import './App.css';
import Navigation from './navigation/navigation';
import "./assets/styles/global.scss";
import { ToastContainer} from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from "./redux/store";
// import 'bootstrap/dist/css/bootstrap.min.css';

registerCharts();

function App() {
  return (
    <>
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} > 
        <ToastContainer
            theme="dark"
            position="bottom-left"
            closeOnClick={true}
            pauseOnHover={false}
          />
          <Navigation />
          </PersistGate>
    </Provider>
    </>
  )
}

export default App
