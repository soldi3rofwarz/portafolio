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
import projectEs from './languajes/es/project.json'
import projectEn from './languajes/en/project.json'
import skillsEs from './languajes/es/skills.json'
import skillsEn from './languajes/en/skills.json'
import certificatesEs from './languajes/es/certificates.json'
import certificatesEn from './languajes/en/certificates.json'
import contactEs from './languajes/es/contact.json'
import contactEn from './languajes/en/contact.json'


i18n
.init({
  interpolation: {escapeValue: false},
  lng: 'es',
  resources:{
    es:{
      home: homeEs,
      header: headerEs,
      about: aboutEs,
      project: projectEs,
      skills: skillsEs,
      certificates: certificatesEs,
      contact: contactEs
    },
    en:{
      home: homeEn,
      header: headerEn,
      about: aboutEn,
      project: projectEn,
      skills: skillsEn,
      certificates: certificatesEn,
      contact: contactEn
    }
  },
  
  fallbackLng: "es",
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
 