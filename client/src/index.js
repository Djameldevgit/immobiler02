import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import DataProvider from './redux/store';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root')
);

// ✅ REGISTRAR EL SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js") // Asegúrate de que el path es correcto
      .then((registration) => {
        console.log("✅ Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.error("❌ Error al registrar Service Worker:", error);
      });
  });
}

// Reporte de métricas (opcional)
reportWebVitals();
