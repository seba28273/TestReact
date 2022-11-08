import React from 'react'
import ReactDOM from 'react-dom/client'
import "./css/App.scss"


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

function Gretting() {
    const name = 'Eldar'
    return <div>

        <h1 className='paragraph'>{name}</h1>
    </div>
}

root.render(<div>
    <Gretting />

</div>)