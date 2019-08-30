import React from "react";
import PropTypes from "prop-types";
import { animated } from "react-spring/renderprops";

const Circle = props => {
  return (
    <g
      id="circle0"
      transform="translate(-248.000000, -237.000000)"
      fill="#747875"
    >
      <animated.path
        d="M71.1811342,145.748387 C44.1344832,180.586793 65.4184105,249.44805 111.319408,273.684234 C151.417524,294.853219 199.928815,278.187519 226.6542,234.200707 C245.307755,203.493267 251.729651,175.881967 252.773768,142.107329 C253.998598,101.329551 183.46389,47.8285317 137.38218,56.0195463 C115.656511,59.8845705 94.1717916,64.9551985 72.1650139,69.5648604 C30.577163,78.2760826 88.3287511,5.57920781 135.253787,0.65041551 C206.675419,-6.84914975 293.096195,51.6935559 302.192062,114.9523 C310.765871,174.611962 295.445459,230.991673 261.712442,282.176649 C225.931349,336.482012 129.189876,350.310997 68.7515538,300.969886 C27.8904292,267.638485 11.2247125,222.197856 1.46623261,176.509016 C-8.29224728,130.926552 31.8850406,72.8947099 85.5359805,94.765542 C99.0570779,100.277424 82.5057899,131.174764 71.1811342,145.748387 Z"
        id="Fill-257"
      ></animated.path>
    </g>
  );
};

Circle.defaultProps = {
  fill: "#747875",
  x: 0,
  y: 0,
  originX: 0,
  originY: 0,
  toX: 0,
  toY: 0,
  toggle: false
};

Circle.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  originX: PropTypes.number,
  originY: PropTypes.number,
  toX: PropTypes.number,
  toY: PropTypes.number,
  toggle: PropTypes.bool
};

export default Circle;
