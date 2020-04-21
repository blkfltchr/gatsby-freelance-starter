import styled from '@emotion/styled'

const SliderSection = styled.div`
  .slick-slider .slick-list div {
    display: inline-block;
    width: 100%;
  }
  .slick-slider .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    -moz-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
  }
  .slick-slider {
    position: relative;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 5px;
    color: transparent;
    border: 0;
    outline: none;
    background: black;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
    background: darkgray;
  }
  .slick-dots li {
    display: inline-block;
    position: relative;
    margin: 0 5px;
    padding: 0;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .slick-dots li.slick-active button {
    background: black;
  }
  .slick-list {
    overflow: hidden;
    margin-bottom: 30px;
  }
  .site-Banner {
    width: 100%;
    position: relative;
  }
  .site-Banner .Banner-details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    max-width: 90%;
    z-index: 1;
  }
  .site-Banner .Banner-details h1 {
    color: #fff;
    font-size: 3em;
  }
  .slick-slider .slick-list div img {
    width: 100%;
    margin: 0;
  }
  .slick-slider .slick-list .site-Banner:before {
    content: "";
    background: #0000004a;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    height: calc(100% - 1px);
  }
  .site-Banner .Banner-details .sub-title {
    color: #fff;
    margin: 20px 0;
    font-size: 1.5em;
    display:  block;
  }
  .site-Banner .Banner-details a {
    background: ${props => props.theme.colors.primary};
    color: #fff;
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 3px;
    display: inline-block;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

export default SliderSection
