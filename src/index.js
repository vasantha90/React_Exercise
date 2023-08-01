
import ReactDOM from 'react-dom'
import App from './App.js'
import './App.css'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot (document.getElementById("root"))
root.render(
<BrowserRouter>
<App />
</BrowserRouter>)