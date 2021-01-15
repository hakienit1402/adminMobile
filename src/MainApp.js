import React from 'react'
import App from './App'
import { MainProviders } from './ContextProviders'
const MainApp = () => {
    return (
       <MainProviders>
           <App/>
       </MainProviders>
    )
}

export default MainApp
