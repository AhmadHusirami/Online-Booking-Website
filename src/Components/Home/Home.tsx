import { useState } from 'react';
import './Home.scss';
import video from '../../Assets/video.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

export default function Home() {
  const [price, setPrice] = useState(5000);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop className="video"></video>

      <div className='homeContent container'>
        <div className="textDiv">

          <span className='smallText'>
            Our Packages
          </span>

          <h1 className="homeTitle">
            Search Your Holiday
          </h1>

        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="">Search Your Destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter Name Here.....' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className='total'>${price}</h3>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000} value={price} onChange={handlePriceChange} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>More Filters</span>
          </div>
        </div>

        <div className="homeFooterIcon flex">
          <div className="leftIcons">
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <FaLinkedinIn className='icon' />
          </div>

          <div className="rightIcons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>
    </section>
  );
}
