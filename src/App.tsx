import './App.scss'
import './Responsive.scss'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';

export const App = () => {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
