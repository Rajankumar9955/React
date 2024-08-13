import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import LoginContext from './LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <LoginContext>
    <App />
</LoginContext>
)
