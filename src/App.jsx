import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import RouterView from './routes.jsx'
import WhatsappFloating from './components/WhatsappFloating.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <RouterView />
      </div>
      <Footer />
      <WhatsappFloating phone="34611442005" label="¿Te ayudamos?" />
    </div>
  )
}

export default App
