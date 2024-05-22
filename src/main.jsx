import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import DataContext from './component/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DataContext>
        <App />
    </DataContext>
)
