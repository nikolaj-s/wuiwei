
import React from 'react'

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../Components/LandingPage/LandingPage';
import { Footer } from '../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, selectIcon, selectLinks, selectSiteName } from './AppFeature';
import { Navigation } from '../Components/Navigation/Navigation';
import { ContactPage } from '../Components/ContactPage/ContactPage';
import { Gallery } from '../Components/Gallery/Gallery';
import { Reviews } from '../Components/Reviews/Reviews';

function App() {

  const siteName = useSelector(selectSiteName)

  const links = useSelector(selectLinks);

  const icon = useSelector(selectIcon);

  const dispatch = useDispatch();


  React.useEffect(() => {

    dispatch(fetchReviews())
  
  // eslint-disable-next-line
  }, [])


  return (
    <Router>
      <div className="App">
        <div className='background-paralax'/>
        <Navigation icon={icon} links={links} elID="first-content-wrapper"/>
        <Routes>
          <Route exact={true} path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={ <Gallery />} />
          <Route path="/reviews" element={ <Reviews />} />
        </Routes>

        <Footer 
        icon={
          <img alt='nor x west' src="https://res.cloudinary.com/drlkgoter/image/upload/v1638554645/Nor.%20X%20west/Rectangle_25_xtvz2p.png" />
        }
        siteName={siteName}
        
        />
      </div>
    </Router>
  );
}

export default App;
