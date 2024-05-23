import React from 'react'
import { HomeOutlined, FacebookOutlined, InstagramOutlined,YoutubeOutlined,PinterestOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer>
    <div className='footer text-center'><h5 className='typewrite ml-3 mt-3 pt-3'>    <HomeOutlined />
    {" "} Rentify</h5>
    <p className='typewrite ml-3'>Renting  Simplicity</p>
    <hr></hr>
    <p className='ml-3'>Follow us on: <FacebookOutlined />{" "}<InstagramOutlined />{" "}<YoutubeOutlined />{" "}<PinterestOutlined /></p>
</div>
</footer>
)
}

export default Footer