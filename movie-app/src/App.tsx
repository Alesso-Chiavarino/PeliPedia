import './App.scss'
import './Responsive.scss'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { initializeIcons } from '@fluentui/react/lib/index.bundle';
import { useCallback } from 'react';

export const App = () => {

  useCallback(() => {
    initializeIcons()
  }, [])

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
