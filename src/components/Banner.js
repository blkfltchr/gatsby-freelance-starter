import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import SliderSection from './SliderSection'

var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Banner extends Component {
  render() {
    const { bannerData } = this.props;
    return (
      <SliderSection>
        <Slider {...settings}>
          {bannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img sizes={items.node.image.fluid} />
                <div className="Banner-details">
                  <div>
                    <h1>{items.node.title}</h1>
                    <span className="sub-title">{items.node.subHeading}</span>
                    <Link to={items.node.buttonLink}>{items.node.buttonText}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </SliderSection>
    );
  }
}
