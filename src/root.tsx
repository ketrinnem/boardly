import { BrowserRouter as Router } from 'react-router-dom';
import  AppRouter  from './routers/RootRouter';


export const RootComponent = () => {

  return (
    <Router>
      <AppRouter />
    </Router>
  );
};