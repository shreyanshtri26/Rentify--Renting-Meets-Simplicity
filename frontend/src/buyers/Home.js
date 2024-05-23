import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HomeOutlined, SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import home from '../images/home.png' 
import '../home/Home.css';
import { useTypewriter } from 'react-simple-typewriter';

import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Filter from './Filter';
import CardSlider from './CardSlider';
import { UserContext } from '../UserContext';
import Footer from '../Footer';
import NavbarBuyer from './NavBarBuyer';
import NavbarHome from './NavBarHome';
import { useNavigate } from 'react-router-dom';

const HomeBuyer = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [typewrite] = useTypewriter({
    words: ['Cost', 'Preferences', 'Choice of Place'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40
  })

  return (
    <>
      {user?.user.role === 1 ? <NavbarBuyer /> : <NavbarHome />}
      <div className="header container m-5">
        <div className="row justify-content-start">
          <div className="content ml-3 col-lg-5 col-md-6 col-12">
            <h1 className='typewrite fo'><HomeOutlined /> Rentify  </h1>
            <p className='typewrite po '>Renting Meets Simplicity!</p>
            <h3>Choose your dream home </h3>
            <h3>your <span className='typewrite'>{typewrite}</span></h3>
            <Button className='button' icon={<RightOutlined />} iconPosition="end" onClick={() => navigate("/search")}>Explore More</Button>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="header-img">
              <img src={home} alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
      <Filter />
      <div className='count '>
        <div className="container mt-3 mb-5 ">
          <div className="row">
            <div className="col mt-3 box-1">
              <div className='text-center'>
                <HomeOutlined className='mb-2' style={{ fontSize: "30px" }} />
              </div>
              <h5>Begin Your Tenant perfect Match!</h5>
              <p>Renting out your property has never been smoother. Our extensive listings and user-friendly search tools make it easy to connect with qualified tenants. Find your ideal renter today, start exploring our listings now!</p>
            </div>
            <div className="col  mt-3 box-2">
              <div className='text-center'>
                <SearchOutlined className='mb-2 text-center' style={{ fontSize: "30px" }} />
              </div>
              <h5>Connect with Ideal Landlords!</h5>
              <p>Unlock the door to your perfect rental property! Connect directly with our trusted landlords and browse our extensive listings. Find a rental that perfectly suits your lifestyle ,start searching today!</p>
            </div>
            <div className="col mt-3 box-3">
              <div className='text-center'>
                <UsergroupAddOutlined className='mb-2' style={{ fontSize: "30px" }} />
              </div>
              <h5> Tenant Hunt Starts Now!</h5>
              <p>Renting out your property has never been smoother. Our extensive listings and user-friendly search tools make it easy to connect with qualified tenants. Find your ideal renter today, start exploring our listings now!</p>
            </div>
          </div>
        </div>
        <CardSlider />
      </div>
      <Footer />
    </>
  )
}

export default HomeBuyer