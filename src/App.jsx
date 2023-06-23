import { useState, useEffect } from 'react'
import styles from './global.module.css'

import Header from './components/Header/Header'
import Info_usuarios from './components/Info_usuarios/Info_usuarios'

function App() {

  return (
    <div className={styles.container}>
      
      <Header/>

      <Info_usuarios/>

    </div>
  )
}

export default App
