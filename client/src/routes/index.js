import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UsersList from '../view/UsersList';
import UserGallery from '../view/UserGallery';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact component={UsersList} />
        <Route path='/:id' component={UserGallery} />
      </div>
    </Router>
  );
};

export default AppRouter;
