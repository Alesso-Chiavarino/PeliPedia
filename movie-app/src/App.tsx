import './App.scss'
import './Responsive.scss'
import { Home } from './pages/Home/Home';
import { initializeIcons } from '@fluentui/react/lib/index.bundle';

export const App = () => {
  initializeIcons();
  return <Home />
}
