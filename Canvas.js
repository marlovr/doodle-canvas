import React from "react";
import "./Canvas.css";

import { Spring, animated, interpolate } from "react-spring/renderprops";

import PropTypes from "prop-types";
import { random, throttle } from "lodash";

// Don't need to import like this:
// `import doodles from "./doodles/index.js";`
// Javascript will search through entire folder/directory
// for index.js and include its default export
// whatever that is e.g functions, components, arrays, css etc
import doodles from "./bits/doodles";
import shapes from "./bits/shapes";

const SHAPE_WIDTH = 100;
const HIT_WIDTH = SHAPE_WIDTH * 2;
const MAX_MOVE = SHAPE_WIDTH / 3;

class ShapeOrDoodle extends React.PureComponent {
  constructor() {
    super();
    this.me = React.createRef();
    this.collide = this._collide.bind(this);
    this.uncollide = this._uncollide.bind(this);
  }

  state = {
    color: "red",
    x: 0,
    y: 0
  };

  componentDidMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      toggle: false,
      moving: false
    });
  }

  _collide(collisions) {
    // console.log("Collided");

    if (this.state.moving) {
      return;
    }

    if (this.state.toX === this.props.x && this.state.toY === this.props.y) {
      return;
    }

    let toX = 0;
    let toY = 0;

    const collidedTopLeft =
      collisions.topLeft &&
      !collisions.topRight &&
      !collisions.bottomLeft &&
      !collisions.bottomRight &&
      !collisions.bottom &&
      !collisions.top && 
      !collisions.left &&
      !collisions.right;
    const collidedTopRight =
      collisions.topRight &&
      !collisions.bottomRight &&
      !collisions.topLeft &&
      !collisions.bottomLeft &&
      !collisions.bottom &&
      !collisions.top && 
      !collisions.left &&
      !collisions.right;
    const collidedBottomLeft =
      collisions.bottomLeft &&
      !collisions.topLeft &&
      !collisions.bottomRight &&
      !collisions.topRight &&
      !collisions.bottom &&
      !collisions.top && 
      !collisions.left &&
      !collisions.right;
    const collidedBottomRight =
      collisions.bottomRight &&
      !collisions.bottomLeft &&
      !collisions.topRight &&
      !collisions.topLeft &&
      !collisions.bottom &&
      !collisions.top && 
      !collisions.left &&
      !collisions.right;

    const movements = {
      topRight: [
        {
          x: -(MAX_MOVE / 4),
          y: MAX_MOVE
        },
        {
          x: -MAX_MOVE,
          y: MAX_MOVE
        },
        {
          x: -MAX_MOVE,
          y: MAX_MOVE / 4
        }
      ],
      topLeft: [
        {
          x: MAX_MOVE / 4,
          y: MAX_MOVE
        },
        {
          x: MAX_MOVE,
          y: MAX_MOVE
        },
        {
          x: MAX_MOVE,
          y: MAX_MOVE / 4
        }
      ],
      bottomLeft: [
        {
          x: MAX_MOVE / 4,
          y: -MAX_MOVE
        },
        {
          x: MAX_MOVE,
          y: -MAX_MOVE
        },
        {
          x: MAX_MOVE,
          y: -(MAX_MOVE / 4)
        }
      ],
      bottomRight: [
        {
          x: -(MAX_MOVE / 4),
          y: -MAX_MOVE
        },
        {
          x: -MAX_MOVE,
          y: -MAX_MOVE
        },
        {
          x: -MAX_MOVE,
          y: -(MAX_MOVE / 4)
        }
      ],
      bottom: [{
        x: 0,
        y: -MAX_MOVE
      }],
      left: [{
        x: MAX_MOVE,
        y: 0
      }],
      top: [{
        x: 0,
        y: MAX_MOVE
      }],
      right: [{
        x: -MAX_MOVE,
        y: 0
      }]
    };

    var randomIndex = 0;
    var movement = 0;


    if (collidedTopLeft) {
      console.log("tl");
      randomIndex = random(0, movements.topLeft.length - 1);
      movement = movements.topLeft[randomIndex];
      toX = this.props.x + movement.x;
      toY = this.props.y + movement.y;

      this.setState({
        toggle: true,
        moving: true,
        toX: toX,
        toY: toY
      });
      return;
    } else if (collidedTopRight) {
      console.log("tr");
      randomIndex = random(0, movements.topRight.length - 1);
      movement = movements.topRight[randomIndex];
      toX = this.props.x + movement.x;
      toY = this.props.y + movement.y;

      this.setState({
        toggle: true,
        moving: true,
        toX: toX,
        toY: toY
      });
      return;
    } else if (collidedBottomLeft) {
      console.log("bl");
      randomIndex = random(0, movements.bottomLeft.length - 1);
      movement = movements.bottomLeft[randomIndex];
      toX = this.props.x + movement.x;
      toY = this.props.y + movement.y;

      this.setState({
        toggle: true,
        moving: true,
        toX: toX,
        toY: toY
      });
      return;
    } else if (collidedBottomRight) {
      console.log("br");
      randomIndex = random(0, movements.bottomRight.length - 1);
      movement = movements.bottomRight[randomIndex];
      toX = this.props.x + movement.x;
      toY = this.props.y + movement.y;

      this.setState({
        toggle: true,
        moving: true,
        toX: toX,
        toY: toY
      });
      return;
    } else if (collisions.doesIntersect) {
      const randomPlace = random(0, Object.keys(movements).length - 1);

      const key = Object.keys(movements)[randomPlace]

      randomIndex = random(0, movements[key].length - 1);
      movement = movements[key][randomIndex];
      toX = this.props.x + movement.x;
      toY = this.props.y + movement.y;

      this.setState({
        toggle: true,
        moving: true,
        toX: toX,
        toY: toY
      });
      return;
    }
  }

  _uncollide() {
    this.setState({
      toggle: false
    });
  }

  render() {
    const self = this;
    const type = this.props.src.type;
    const Component = this.props.src.component;
    const allProps = {
      ...this.props,
      height: type === "doodle" ? this.props.height : this.props.height / 2,
      width: type === "doodle" ? this.props.width : this.props.width / 2,
      x: this.state.x,
      y: this.state.y,
      originX: this.props.x,
      originY: this.props.y,
      toX: this.state.toX,
      toY: this.state.toY,
      toggle: this.state.toggle
    };
    // So I want to return this component with all of the possible props it has
    // And then I want to check for x and y props and overwite them
    return (
      <Spring
        native
        toggle={this.toggle}
        from={{
          x: allProps.originX,
          y: allProps.originY
        }}
        to={{
          x: allProps.toggle ? allProps.toX : allProps.originX,
          y: allProps.toggle ? allProps.toY : allProps.originY
        }}
        config={{ clamp: true }}
        onRest={() =>
          self.setState({
            moving: false
          })
        }
      >
        {childProps => (
          <animated.svg
            viewBox="-350 -350 700 700"
            ref={self.me}
            x={childProps.x}
            y={childProps.y}
            width={allProps.width}
            height={allProps.height}
          >
            <Component fill="#333" />
          </animated.svg>
        )}
      </Spring>
    );
  }
}

ShapeOrDoodle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  src: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number
};

class Circle extends React.PureComponent {
  constructor() {
    super();
    this.me = React.createRef();
    this.intersectRect = this._intersectRect.bind(this);
  }

  componentDidUpdate() {
    const refs = this.props.refs;
    for (var ref in this.props.refs) {
      if (!refs[ref].current) {
        continue;
      }

      const collisions = this.intersectRect(refs[ref]);

      if (collisions.doesIntersect) {
        refs[ref].current.collide(collisions);
      } else {
        refs[ref].current.uncollide();
      }
    }
  }

  _intersectRect(item) {
    if (!item.current.me.current) {
      return false;
    }

    var r1 = this.me.current.getBoundingClientRect(); //BOUNDING BOX OF THE FIRST OBJECT
    var r2 = item.current.me.current.getBoundingClientRect(); //BOUNDING BOX OF THE SECOND OBJECT

    const xM = (r2.right - r2.left) / 2;
    const xY = (r2.bottom - r2.top) / 2;

    const doesIntersect = !(
      r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top
    );

    const result = {
      topLeft: this._intersectTL(r1, r2, xM, xY),
      topRight: this._intersectTR(r1, r2, xM, xY),
      bottomLeft: this._intersectBL(r1, r2, xM, xY),
      bottomRight: this._intersectBR(r1, r2, xM, xY),
      doesIntersect: doesIntersect
    };

    //CHECK IF THE TWO BOUNDING BOXES OVERLAP
    return result;
  }

  _intersectTL(r1, r2, xM, yM) {
    const a = r1.right - r2.left;
    const b = r1.bottom - r2.top;

    return a < xM && b < yM && a > 0 && b > 0;
  }

  _intersectTR(r1, r2, xM, yM) {
    const a = r2.right - r1.left;
    const b = r1.bottom - r2.top;

    return a < xM && b < yM && a > 0 && b > 0;
  }

  _intersectBL(r1, r2, xM, yM) {
    const a = r1.right - r2.left;
    const b = r2.bottom - r1.top;

    return a < xM && b < yM && a > 0 && b > 0;
  }

  _intersectBR(r1, r2, xM, yM) {
    const a = r2.right - r1.left;
    const b = r2.bottom - r1.top;

    return a < xM && b < yM && a > 0 && b > 0;
  }

  render() {
    return (
      <g
        height={this.props.height}
        width={this.props.width}
        transform={`translate(${this.props.mX - HIT_WIDTH / 4}, ${this.props.mY -
          HIT_WIDTH / 4})`}
        ref={this.me}
        style={{ opacity: 0 }}
      >
        <rect
          width={this.props.cx}
          height={this.props.cy}
          stroke="black"
          strokeWidth="3"
          fill={this.props.fill}
        />
      </g>
    );
  }
}

Circle.defaultProps = {
  mX: 0,
  mY: 0,
  rows: []
};

export default class Canvas extends React.PureComponent {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.refs = [];

    this.getRows = this._getRows.bind(this);
    this.getRow = this._getRow.bind(this);
    this.getItem = this._getItem.bind(this);
    this.getRandomDoodle = this._getRandomDoodle.bind(this);
    this.getRandomShape = this._getRandomShape.bind(this);
  }

  state = {
    mX: 0,
    mY: 0,
    height: 500,
    screenWidth: screen.width,
    rows: [],
    refs: {}
  };

  _getRows(numRows, numCols) {
    let rows = [];

    for (var i = 0; i < numRows; i++) {
      const row = this.getRow(numCols, i);
      rows.push(row);
    }
    return rows;
  }

  _getRow(numColumns, rowIndex) {
    let cols = [];

    for (var i = 0; i < numColumns; i++) {
      const item = this.getItem(i, rowIndex);
      const key = `${rowIndex}${i}`;

      this.refs = {
        ...this.refs,
        [key]: React.createRef()
      };

      cols.push(
        <ShapeOrDoodle
          key={key}
          ref={this.refs[key]}
          x={i * SHAPE_WIDTH}
          y={rowIndex * SHAPE_WIDTH}
          src={item}
          width={SHAPE_WIDTH}
          height={SHAPE_WIDTH}
        />
      );
    }

    return cols;
  }

  _getItem(index, rowIndex) {
    if (rowIndex % 2 > 0) {
      if (index % 2 > 0) {
        //if odd
        return this.getRandomDoodle();
      }
      return this.getRandomShape();
    }

    if (index % 2 > 0) {
      //if odd
      return this.getRandomShape();
    }
    return this.getRandomDoodle();
  }

  _getRandomDoodle() {
    const max = doodles.length - 1;
    const min = 0;
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    return {
      type: "doodle",
      component: doodles[random]
    };
  }

  _getRandomShape() {
    const max = shapes.length - 1;
    const min = 0;
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    return {
      type: "shape",
      component: shapes[random]
    };
  }

  componentDidMount() {
    const screenWidth = this.state.screenWidth;
    const height = this.state.height;
    const numRows = height / SHAPE_WIDTH;
    const numCols = screenWidth / SHAPE_WIDTH;

    this.setState({
      rows: this.getRows(numRows, numCols)
    });
  }

  mouseMove(evt) {
    var x = evt.pageX - this.canvas.current.offsetLeft;
    var y = evt.pageY - this.canvas.current.offsetTop;

    this.setState({
      mY: y,
      mX: x
    });
  }

  render() {
    return (
      <div
        className="canvas-container"
        ref={this.canvas}
        onMouseMove={this.mouseMove.bind(this)}
        style={{ height: this.state.height }}
      >
        <svg width="100%" height={this.state.height}>
          <Circle
            height={HIT_WIDTH}
            width={HIT_WIDTH}
            mX={this.state.mX - 40}
            mY={this.state.mY - 40}
            cx={HIT_WIDTH}
            cy={HIT_WIDTH}
            r="40"
            fill="red"
            refs={this.refs}
          />
          {this.state.rows}
        </svg>
      </div>
    );
  }
}
