import React from 'react';
import { Redirect } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

// children
import CarouselPage from '../components/Carousel';
// import BiddingPage from './BiddingPage';
import ProductHome from './ProductHome';

const Home = () => {

  const role = useSelector(({ auth }) => auth.role_id)

  if (role === 1) {
    return (
      <Redirect to='/internal' />
    )
  }

  return (
    <div>
      <CarouselPage />
      <div className="container mt-3" style={{ border: '1px solid black', height: '800px', width: '100%' }}>
        <div className="row">
          <div className="col-sm-3" style={{ border: '1px solid blue', height: '800px'}}>
            Tempat Filter
          </div>
          <div className="col-sm-9" style={{ border: '1px solid yellow', height: '800px', width: '100%' }}>
            <ProductHome />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;