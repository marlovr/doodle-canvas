import React from "react";

import { Spring, animated, interpolate } from "react-spring/renderprops";

import PropTypes from "prop-types";
import { random, throttle } from "lodash";
import pointInSvgPolygon from "point-in-svg-polygon";

// Don't need to import like this:
// `import doodles from "./doodles/index.js";`
// Javascript will search through entire folder/directory
// for index.js and include its default export
// whatever that is e.g functions, components, arrays, css etc
import doodles from "./bits/doodles";
import shapes from "./bits/shapes";

const SHAPE_WIDTH = 75;
const SHAPE_SPACE = 30;
const HIT_WIDTH = SHAPE_WIDTH * 2;
const MAX_MOVE = SHAPE_WIDTH / 3;

class ShapeOrDoodle extends React.PureComponent {
  constructor() {
    super();
    this.me = React.createRef();
    this.collide = this._collide.bind(this);
    this.uncollide = this._uncollide.bind(this);

    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      toggle: false,
      moving: false
    });
  }

  _collide(collisions) {
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
          x: -(this.props.maxMove / 4),
          y: this.props.maxMove
        },
        {
          x: -this.props.maxMove,
          y: this.props.maxMove
        },
        {
          x: -this.props.maxMove,
          y: this.props.maxMove / 4
        }
      ],
      topLeft: [
        {
          x: this.props.maxMove / 4,
          y: this.props.maxMove
        },
        {
          x: this.props.maxMove,
          y: this.props.maxMove
        },
        {
          x: this.props.maxMove,
          y: this.props.maxMove / 4
        }
      ],
      bottomLeft: [
        {
          x: this.props.maxMove / 4,
          y: -this.props.maxMove
        },
        {
          x: this.props.maxMove,
          y: -this.props.maxMove
        },
        {
          x: this.props.maxMove,
          y: -(this.props.maxMove / 4)
        }
      ],
      bottomRight: [
        {
          x: -(this.props.maxMove / 4),
          y: -this.props.maxMove
        },
        {
          x: -this.props.maxMove,
          y: -this.props.maxMove
        },
        {
          x: -this.props.maxMove,
          y: -(this.props.maxMove / 4)
        }
      ],
      bottom: [
        {
          x: 0,
          y: -this.props.maxMove
        }
      ],
      left: [
        {
          x: this.props.maxMove,
          y: 0
        }
      ],
      top: [
        {
          x: 0,
          y: this.props.maxMove
        }
      ],
      right: [
        {
          x: -this.props.maxMove,
          y: 0
        }
      ]
    };

    var randomIndex = 0;
    var movement = 0;

    if (collidedTopLeft) {
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

      const key = Object.keys(movements)[randomPlace];

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

ShapeOrDoodle.defaultProps = {
  maxMove: MAX_MOVE
};

ShapeOrDoodle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  src: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  maxMove: PropTypes.number
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
        transform={`translate(${this.props.mX - this.props.hitWidth / 4}, ${this
          .props.mY -
          this.props.hitWidth / 4})`}
        ref={this.me}
        style={{ opacity: 0.3 }}
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
  rows: [],
  hitWidth: HIT_WIDTH
};

export default class Canvas extends React.PureComponent {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.refs = [];

    this.getRows = this._getRows.bind(this);
    this.getRow = this._getRow.bind(this);

    this.plot = throttle(this.plot.bind(this), 1000);

    this.state = {
      mX: 0,
      mY: 0,
      height: "100vh",
      rows: [],
      refs: {}
    };
  }

  _getRows(numRows, numCols, assets) {
    let rows = [];

    for (var i = 0; i < numRows - 1; i++) {
      const row = this.getRow(numCols, i, assets);
      rows.push(row);
    }

    return rows;
  }

  _getRow(numColumns, rowIndex, assets) {
    let cols = [];

    for (var i = 0; i < numColumns; i++) {
      const item = assets[rowIndex][i];
      const key = `${rowIndex}${i}`;

      this.refs = {
        ...this.refs,
        [key]: React.createRef()
      };

      const x = i * this.props.shapeSpace;
      const y = rowIndex * this.props.shapeSpace;

      const shouldPlot =
        pointInSvgPolygon.isInside(
          [x + this.props.shapeWidth / 2, y + this.props.shapeWidth / 2],
          this.props.mask
        ) ||
        pointInSvgPolygon.isInside(
          [x, y - this.props.shapeWidth / 4],
          this.props.mask
        );

      if (shouldPlot) {
        cols.push(
          <ShapeOrDoodle
            maxMove={this.props.maxMove}
            key={key}
            ref={this.refs[key]}
            x={x}
            y={y}
            src={item}
            width={this.props.shapeWidth}
            height={this.props.shapeWidth}
          />
        );
      }
    }

    return cols;
  }

  componentDidMount() {
    const assets = this.getStaticDoodleList(
      window.screen.width,
      window.screen.height,
      this.props.shapeSpace
    );

    this.plot(assets);
  }

  // Generate a STATIC list of randomized doodles with
  // a shape in between each one
  getStaticDoodleList(wWidth, wHeight, shapeSpace) {
    const width = wWidth;
    const height = wHeight;

    const maxNumRows = height / shapeSpace;
    const maxNumCols = width / shapeSpace;

    var rnd = 0;
    let rows = [];

    for (var index = 0; index <= maxNumRows; index++) {
      var col = [];

      for (var rowIndex = 0; rowIndex <= maxNumCols; rowIndex++) {
        if (rowIndex % 2 > 0) {
          if (index % 2 > 0) {
            //if odd

            rnd = random(0, doodles.length - 1);
            col.push({
              type: "doodle",
              component: doodles[rnd]
            });
            continue;
          }

          col.push({
            type: "shape",
            component: shapes[0]
          });

          continue;
        } else {
          if (index % 2 > 0) {
            //if odd

            col.push({
              type: "shape",
              component: shapes[0]
            });

            continue;
          }

          rnd = random(0, doodles.length - 1);
          col.push({
            type: "doodle",
            component: doodles[rnd]
          });
          continue;
        }
      }

      rows.push(col);
    }

    return rows;
  }

  viewportToPixels(value) {
    var parts = value.match(/([0-9\.]+)(vh|vw)/);
    var q = Number(parts[1]);
    var side =
      window[["innerHeight", "innerWidth"][["vh", "vw"].indexOf(parts[2])]];
    return side * (q / 100);
  }

  plot(assets) {
    const screenWidth = this.props.width || window.screen.width;
    const height = this.viewportToPixels(this.state.height);
    const numRows = height / this.props.shapeSpace;
    const numCols = screenWidth / this.props.shapeSpace;

    this.setState({
      rows: this.getRows(numRows, numCols, assets)
    });
  }

  mouseMove(evt) {
    let point = this.canvas.current.createSVGPoint();
    point.x = evt.clientX;
    point.y = evt.clientY;
    let cursor = point.matrixTransform(this.canvas.current.getScreenCTM().inverse());

    this.setState({
      mY: cursor.y,
      mX: cursor.x
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          width: "100%"
        }}
      >
        <svg
          height={this.state.height}
          className={this.props.className}
          viewBox={this.props.viewBox}
          width="100%"
          onMouseMove={this.mouseMove.bind(this)}
          ref={this.canvas}
        >
          <Circle
            hitWidth={this.props.hitWidth}
            height={this.props.hitWidth}
            width={this.props.hitWidth}
            mX={this.state.mX - (this.props.hitWidth / 4)}
            mY={this.state.mY - (this.props.hitWidth / 4)}
            cx={this.props.hitWidth}
            cy={this.props.hitWidth}
            r="40"
            fill="red"
            refs={this.refs}
          />
          {this.state.rows}
          {this.props.component}
        </svg>
      </div>
    );
  }
}

Canvas.defaultProps = {
  component: () => <svg></svg>,
  shapeWidth: SHAPE_WIDTH,
  shapeSpace: SHAPE_SPACE,
  hitWidth: SHAPE_WIDTH * 2,
  maxMove: SHAPE_WIDTH / 3,
  backgroundColor: "white",
  mask: "M1,220a214.5,219 0 1,0 429,0a214.5,219 0 1,0 -429,0",
  className: "",
  viewBox: "0 0 500 700"
};

Canvas.propTypes = {
  component: PropTypes.elementType,
  mask: PropTypes.string,
  shapeWidth: PropTypes.number,
  shapeSpace: PropTypes.number,
  hitWidth: PropTypes.number,
  maxMove: PropTypes.number,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string
};
