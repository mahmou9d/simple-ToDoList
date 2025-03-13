import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'
import ContextProvider from './components/context/ContextProvider'

createRoot(document.getElementById('root')).render(
  <ContextProvider>

     <Provider store={store} >

    <StrictMode>
    <App />
  </StrictMode>

  </Provider>
  </ContextProvider>
 
 ) 
