import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@ui5/webcomponents-react'
import App from './App'

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

import "~/styles/main.css"

declare global {
  interface Window {
    demoAPI: any;
  }
}
window.demoAPI = {};

//import '@unocss/reset/tailwind.css'
//import './styles/main.css'
//import 'uno.css' //**** BREAKS UI5 Layout Styles *****//

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
