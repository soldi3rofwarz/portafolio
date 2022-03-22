import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next'
import {I18nextProvider} from 'react-i18next'

import homeEs from './languajes/es/home.json'
import homeEn from './languajes/en/home.json'
import headerEs from './languajes/es/header.json'
import headerEn from './languajes/en/header.json'
import aboutEs from './languajes/es/about.json'
import aboutEn from './languajes/en/about.json'

i18n.init({
  interpolation: {escapeValue: false},
  lng:'es',
  resources:{
    es:{
      home: homeEs,
      header: headerEs,
      about: aboutEs
    },
    en:{
      home: homeEn,
      header: headerEn,
      about: aboutEn
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 