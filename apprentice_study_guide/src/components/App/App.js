import React, { Fragment } from 'react';
import * as Questions_List from '../../assets/questions.json';
import Questions from '../Questions';
import Nav from '../Nav';
import './Default.css';
import { useAuth0 } from '../../helpers/auth/react-auth0-spa';

function App() {
  const { loading, isAuthenticated, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Nav />
      {isAuthenticated && (
        <div className="Nav_Spacer">
          <h1> {user.email} </h1>
        </div>
      )}
      {!isAuthenticated && (
        <div className="Nav_Spacer">
          <h1> Please login to continue</h1>
        </div>
      )}
      {/*<Questions questions={Questions_List} />*/}
    </Fragment>
  );
}

export default App;
