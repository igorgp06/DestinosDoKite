import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { HomePage } from './pages/public/HomePage/HomePage'
import { NotFound } from './pages/err/NotFound'
import { Destinos } from './pages/public/Destinos/Destinos'
import { Contact } from './pages/public/Contact/Contact'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>

          <Route index element={<HomePage />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="contato" element={<Contact />} />

        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
