import React from "react";
import PropTypes from "prop-types";
import { animated } from "react-spring/renderprops";

const PottedSeedling = props => {
  return (
    <g
      id="potted-seedling_DL"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
      transform="translate(-500, -500)"
    >
      <animated.path
        d="M409.571185,424.144086 C409.797993,426.824404 410.071758,429.502494 410.210307,432.196849 C410.401798,435.769826 410.383985,439.307294 410.366172,442.880271 C410.317186,450.492264 410.143508,458.117573 410.366172,465.729566 C410.495641,469.712096 410.868235,473.684529 411.242237,477.655089 C413.461751,477.546776 415.683055,477.467126 417.907421,477.424454 C422.869196,477.335095 427.808781,477.370839 432.748366,477.107231 C434.146361,477.031276 435.535481,477 436.924601,477 C440.58158,477 444.220807,477.214461 447.899977,477.352967 C453.048151,477.56296 458.493678,477.580832 463.504272,478.889938 C466.952661,479.79693 470.596327,481.646657 472.881939,484.492735 C476.055167,488.437925 478.047866,493.741369 476.41909,498.85716 C475.065475,503.04362 472.571273,506.358831 469.642139,509.571279 C468.772275,510.531886 467.751516,511.367391 466.744072,512.189492 C465.323885,513.360092 463.952518,514.597711 462.412504,515.611934 C461.768982,516.027452 461.081079,516.384887 460.393177,516.742322 C460.197901,519.128202 460.095825,521.531953 459.949369,523.917833 C459.687522,527.863024 459.532189,531.826086 459.447865,535.802552 C459.257028,543.429325 459.257028,555.541909 459.168266,563.186554 C459.132761,566.466021 459.132761,569.732085 458.786591,572.993681 C458.529182,575.455516 458.231831,578.037985 456.913721,580.204935 C455.631115,582.295931 454.437271,583.430788 452.493391,584.864996 C450.034694,586.661108 446.963541,587.183857 444.016655,587.447465 C440.825674,587.724478 389.255165,589.145282 386.547935,589.533993 C386.823096,589.493782 387.093819,589.458038 387.364542,589.417827 C380.427821,590.414177 373.562108,591.951149 366.59432,592.648147 C364.566117,592.85814 362.311571,593.135152 360.265615,592.925159 C358.117584,592.715166 355.934048,592.558788 354.061177,591.303297 C352.290383,590.132697 350.714864,588.841463 349.6586,586.93812 C348.34049,584.61926 347.661463,582.193169 347.248722,579.592828 C346.640705,575.754868 346.05044,571.827549 346.05044,567.935973 C346.05044,565.036281 346.121449,562.158928 346.103697,559.277107 C346.085944,553.710054 345.553375,548.134065 344.874348,542.602756 C344.43054,539.787954 343.862465,536.924005 343.813646,534.07346 C343.778142,532.277348 343.933475,530.289115 344.332902,528.560022 C344.665758,527.076666 345.358099,525.713945 345.961678,524.319948 C346.534191,522.997438 347.683654,521.840241 349.001764,520.960057 C348.788736,520.93325 348.580146,520.901974 348.371556,520.870698 C344.710139,520.397097 341.084226,519.936899 337.46719,519.15501 C335.234835,518.681408 333.11787,518.051429 331.071914,516.938912 C326.944498,514.68707 324.312715,510.688264 322.923596,506.27394 C321.587733,502.083013 321.538914,496.846587 323.860031,492.972884 C325.732902,489.885538 328.209351,487.66944 331.227247,485.748226 C333.153374,484.541882 335.217082,483.567871 337.382866,482.853001 C339.730611,482.066643 342.25588,481.847714 344.696825,481.539427 C349.183725,480.931787 353.639559,480.42691 358.184155,480.25266 C363.110426,480.060539 368.014506,479.676296 372.954091,479.359072 C377.742781,479.064188 382.509281,478.590586 387.293533,478.402933 C389.028752,478.343841 390.773069,478.358018 392.521469,478.384899 C392.465345,477.864963 392.406215,477.345252 392.343811,476.825766 C390.584772,463.883158 390.495707,450.873973 390.30867,437.815965 C390.206244,431.557708 389.355671,425.348275 388.97269,419.107772 C388.7812,416.07629 388.638695,413.058124 388.607523,410.022203 C388.58971,408.304511 388.643149,406.569066 388.527364,404.851374 C388.220089,403.22689 387.854921,401.637914 387.734683,399.933538 C387.605538,398.255793 387.436314,396.586924 387.249277,394.918056 C385.54813,395.006825 383.851436,395.135541 382.154743,395.317519 C378.507519,395.952221 374.846936,396.879864 371.14182,397.052965 C366.964659,397.243819 362.809763,396.467085 358.703853,395.787998 C350.96408,394.505277 343.549395,391.176417 337.862577,385.73484 C335.72501,383.653193 333.738854,381.451707 331.87739,379.125944 C330.015925,376.840126 328.105475,374.585379 326.836295,371.913414 C325.86103,369.836205 324.939204,367.701296 324.244495,365.517564 C321.648242,357.350761 320.886734,348.527062 324.226682,340.449029 C325.197494,338.105511 326.172758,336.387819 327.896172,334.483711 L328.728932,333.547192 C329.356842,332.903613 329.998112,332.299979 330.697275,331.709661 C333.324701,329.490421 336.036739,327.39102 339.203009,325.988461 C342.155524,324.674671 345.250542,323.995583 348.470252,324.000022 C348.866593,324.000022 349.27184,324.00446 349.672634,324.026652 C351.534098,324.133176 353.377749,324.408362 355.225854,324.652478 C357.572724,324.963172 359.901782,325.362635 362.128414,326.197069 C367.28084,328.154439 372.66929,330.355925 377.40311,333.200991 C380.832123,335.24713 383.962768,337.723802 386.63918,340.688707 C388.416032,342.668269 390.117179,344.696654 391.773793,346.773863 C398.556115,355.411145 402.782263,366.036866 405.356249,376.649272 C405.654755,377.868593 405.910456,379.098847 406.134369,380.336501 C406.566787,379.619456 407.014347,378.914983 407.480591,378.226894 C410.50036,373.740404 414.080497,369.566717 417.745135,365.589649 C420.524745,362.55099 423.775777,360.213904 427.596073,358.658826 C431.434159,357.103748 435.552429,356.58092 439.635121,356.142996 C440.520148,356.044686 441.400729,356 442.285757,356 C447.02666,356 451.683063,357.362928 455.948096,359.409554 C461.405027,362.046037 464.407006,367.613932 465.692297,373.320354 C466.301588,376.095364 467.066537,379.01337 466.995379,381.855409 C466.910878,385.506268 466.266009,388.978383 464.495953,392.209192 C459.910708,400.637 451.571878,406.607071 443.802312,411.915786 C441.022702,413.819416 438.22975,415.754327 435.169955,417.188752 C431.41637,418.931512 427.524915,419.910139 423.531172,420.799394 C419.501849,421.706523 415.419158,422.336597 411.456545,423.556529 C410.830369,423.753144 410.204192,423.949759 409.571185,424.144086 Z M446.599619,499.674793 C441.731043,499.607774 436.929039,499.518415 432.038273,499.902658 C427.471487,500.237754 422.891386,500.237754 418.311286,500.327112 C420.579146,502.293006 422.034837,505.183763 422.034837,508.418551 C422.034837,514.213468 417.197327,519.186285 411.392317,519.137138 C407.056311,519.083523 402.826819,519.552656 398.526318,519.905623 C394.070484,520.240719 389.610212,520.62943 385.181006,521.125371 C379.935193,521.898324 374.764828,522.626599 369.452444,522.782976 C367.273346,522.845528 365.116439,522.787444 362.968407,522.635534 C363.895966,523.689968 364.592745,524.882908 365.054306,526.214354 C365.680075,527.594947 366.212645,529.029156 366.474492,530.530384 C366.922738,533.117321 367.131328,535.748937 367.459746,538.349278 L367.042566,535.261932 C368.085515,542.960191 368.706847,550.622708 368.32961,558.387987 C368.169839,561.564692 367.91243,564.741397 367.757097,567.935973 C367.708278,568.887645 367.694964,569.843784 367.712716,570.795455 C373.016224,569.942078 418.444428,571.756062 425.416655,570.902685 C428.936054,570.464827 432.539776,570.219091 436.094679,570.272706 C436.866906,570.281642 437.648008,570.308449 438.424672,570.339725 C438.446863,566.340919 438.269339,562.319773 438.278216,558.352243 C438.295968,550.761214 438.366977,534.234306 438.832976,526.65668 C439.041566,523.497847 439.423241,520.356885 439.716154,517.215924 C439.924744,514.964082 440.115581,512.712241 440.634837,510.514014 C441.242854,507.87793 442.680793,504.64761 444.833262,502.887242 C446.275639,501.685366 447.664758,500.550509 449.297972,499.710537 C448.40148,499.697133 447.500549,499.688197 446.599619,499.674793 Z M354.580131,345.544404 C354.869593,345.668681 355.159055,345.797397 355.452971,345.917236 C355.159055,345.792959 354.869593,345.668681 354.580131,345.544404 Z M350.924001,344.985155 C349.917563,344.896386 348.924485,344.843124 347.913594,344.860878 C347.094194,345.313603 346.310419,345.815151 345.535551,346.352207 C344.836389,346.946963 344.155039,347.559474 343.509316,348.21193 C343.322279,348.868825 343.161961,349.52572 343.019457,350.191492 C342.957111,351.22122 342.957111,352.237632 343.02391,353.271797 C343.527129,355.917132 344.257464,358.518081 345.170384,361.052453 C345.646883,362.020042 346.167915,362.938807 346.773559,363.853134 C348.781981,366.205528 350.870562,368.473592 353.190712,370.528608 C354.237229,371.212134 355.314919,371.820206 356.423782,372.392769 C358.654868,373.133996 360.921579,373.671052 363.237276,374.08383 C365.441642,374.31907 367.628195,374.478855 369.837014,374.367893 C372.789528,373.804206 375.706416,373.031911 378.707916,372.628009 C379.754433,372.477101 380.805404,372.330631 381.856374,372.184161 C381.696057,371.758067 381.531286,371.331973 381.366515,370.90144 C379.665368,367.173117 377.786091,363.586825 375.461487,360.191388 C373.372906,357.594877 371.186353,355.020559 368.692525,352.819072 C364.925064,350.235877 360.765715,348.234123 356.561833,346.40103 C354.713729,345.73082 352.838904,345.313603 350.924001,344.985155 Z M349.378718,344.554623 C349.08035,344.576815 348.786434,344.616761 348.496972,344.670023 C348.790887,344.630077 349.084803,344.594569 349.378718,344.554623 Z M445.470078,380.112649 L445.536789,380.568448 C445.518999,380.416515 445.496762,380.264582 445.470078,380.112649 Z M442.708258,377.386794 C440.849254,377.30189 439.012488,377.404668 437.171274,377.596819 C436.117246,377.797906 435.116586,378.039212 434.102585,378.343078 C433.684531,378.570977 433.275373,378.812282 432.870662,379.071462 C429.984314,381.618573 427.351468,384.53211 424.878727,387.490334 C422.036853,391.476339 419.782034,395.815364 417.473845,400.136515 C420.275692,399.618156 423.05975,399.005956 425.750412,398.080952 C430.268946,395.815364 434.409454,392.714145 438.456566,389.684424 C440.867044,387.669078 443.130758,385.559892 445.163209,383.173651 C445.318867,382.932346 445.470078,382.682103 445.612394,382.431861 C445.630184,382.378237 445.643526,382.320145 445.661315,382.266522 C445.656868,382.150338 445.65242,382.029685 445.647973,381.913501 C445.381131,380.563979 445.083156,379.223395 444.705129,377.909622 C444.046918,377.708534 443.379811,377.534258 442.708258,377.386794 Z M443.544364,375.644034 C443.780075,375.9479 444.020233,376.256234 444.260392,376.569037 C444.046918,376.242828 443.806759,375.934494 443.544364,375.644034 Z"
        id="potted-seedling"
        fill={props.fill}
      ></animated.path>
    </g>
  );
};

PottedSeedling.defaultProps = {
  fill: "#000000",
  x: 0,
  y: 0,
  originX: 0,
  originY: 0,
  toX: 0,
  toY: 0,
  toggle: false
};

PottedSeedling.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  originX: PropTypes.number,
  originY: PropTypes.number,
  toX: PropTypes.number,
  toY: PropTypes.number,
  toggle: PropTypes.bool
};

export default PottedSeedling;
