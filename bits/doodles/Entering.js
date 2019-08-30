import React from "react";
import PropTypes from "prop-types";
import { animated } from "react-spring/renderprops";

const Entering = props => {
  return (
    <g
      id="entering_DL"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="entering" transform="translate(-287.000000, -261.000000)">
        <g id="Fill-646" transform="translate(0.000000, -61.000000)">
          <animated.path
            d="M63.5607873,235.150754 C63.3757321,237.482123 63.1323918,239.803361 62.9021657,242.13473 C62.2712296,246.408181 61.5761798,250.665715 60.7266745,254.913118 C59.6396575,260.35153 57.3854815,281.827735 57.1246557,288.075108 C57.0270281,290.50633 56.9702002,292.936105 56.8958867,295.367327 C56.7603738,300.239902 56.2751504,305.938802 59.2695472,310.064644 L61.5922082,313.050127 C63.4471313,314.88078 65.6328224,316.147041 68.1551099,316.848912 C73.3803686,318.278702 78.7309403,316.695513 82.6127276,313.050127 C84.0975404,311.65941 85.293842,309.963343 86.380859,308.244122 C89.206229,303.781092 88.9512317,298.196517 86.5120005,293.775455 C86.5120005,292.038868 86.5498858,290.303728 86.5848569,288.567141 C86.6649989,284.820454 88.0842409,266.989635 89.2951138,260.910132 C90.9853815,252.419668 92.123398,243.777252 92.8067907,235.150754 C93.1025876,231.464848 91.0757234,227.411364 88.5257505,224.878841 C85.7936367,222.165423 82.0488194,220.622754 78.1845176,220.622754 C74.3187587,220.622754 70.5739413,222.165423 67.8418275,224.878841 C64.9392298,227.761575 63.8740697,231.181205 63.5607873,235.150754 Z"
            fill="#2C2C2C"
            mask="url(#mask-2)"
          ></animated.path>
        </g>
        <animated.path
          d="M116.386405,117.311392 C118.225752,117.669059 120.027766,118.138765 121.802499,118.74493 C122.635303,119.168671 123.442261,119.62545 124.231988,120.123884 C124.473214,120.350837 124.708697,120.583536 124.941307,120.820543 C125.232789,121.293122 125.507039,121.77432 125.766932,122.267009 C126.68158,124.97177 127.290388,127.75697 127.792942,130.576643 C128.370161,135.444638 128.72482,140.283905 128.334264,145.193556 C127.821659,147.934228 127.082187,150.597333 126.121591,153.217345 C124.885308,155.800012 123.472414,158.259146 121.847011,160.620605 C120.761495,161.873155 119.6128,163.046702 118.377954,164.155611 C117.101467,165.007403 115.779032,165.764391 114.403471,166.450995 C111.92947,167.320024 109.415265,167.959226 106.836445,168.431805 C104.689822,168.61423 102.550379,168.658758 100.398012,168.522299 C98.8185573,168.210598 97.2735631,167.799785 95.7486711,167.28555 C94.8799709,166.833081 94.0385521,166.344701 93.2129279,165.817538 C92.6084274,165.254465 92.0326442,164.666974 91.479835,164.055063 C90.7791313,162.960518 90.161708,161.835808 89.59454,160.672316 C88.8378375,158.507645 88.2721054,156.307064 87.8600113,154.0519 C87.7279114,152.61118 87.6532462,151.179079 87.666169,149.742669 C92.4246362,144.297236 92.6859643,136.093896 88.0409306,130.532115 C88.0969295,130.444494 88.1543642,130.358309 88.211799,130.270688 C90.0755559,128.014087 92.0671051,125.855162 94.2611117,123.92319 C95.7156461,122.965104 97.2175643,122.137732 98.7869682,121.389362 C103.34585,119.652742 108.049754,118.199094 112.836938,117.269737 C114.022966,117.21228 115.200378,117.23239 116.386405,117.311392 M112.0788,88.0861846 C109.63926,88.2829729 107.165259,88.6636216 104.781718,89.2310038 C102.874885,89.6849095 101.001077,90.190526 99.1172179,90.7176886 C96.8054701,91.3568913 94.5569005,92.2216104 92.3126385,93.0461101 C89.3461348,94.1291636 86.4298865,95.3917684 83.5911751,96.7721589 C80.0244785,98.5001607 76.838287,101.075645 73.8660398,103.656874 C71.6160344,105.608956 69.691971,107.925886 67.7908815,110.209779 C65.7605639,112.65024 63.6742474,115.107939 62.2268923,117.947722 C61.0265065,120.299126 60.2310355,122.756825 59.5576133,125.286344 C58.536711,129.140233 59.1929028,133.111908 61.0882488,136.351014 C58.9789584,140.18623 58.3959959,144.261326 58.0600028,148.566248 C57.8575454,151.141732 58.2050255,153.767491 58.5424545,156.315683 C59.0636746,160.1983 59.6193556,163.895621 60.7967675,167.633161 C61.8119264,170.853593 63.2765119,173.995023 64.8243778,176.997121 C66.3047579,179.858451 68.4815341,182.400897 70.5621071,184.841359 C72.6311932,187.271765 75.3751373,189.19081 77.9539566,191.013615 C80.9893819,193.162485 84.6738197,194.531384 88.145749,195.755206 C91.2357374,196.849751 94.4664408,197.208853 97.6971442,197.639776 C100.209914,197.977333 102.672428,198.060645 105.202427,197.960096 C108.66287,197.825073 112.129055,197.230399 115.533499,196.624234 C118.461234,196.102817 121.299946,195.199315 124.053941,194.094715 C127.166903,192.842165 130.144894,191.50774 132.983605,189.723718 C135.770625,187.966988 138.362367,185.783644 140.734422,183.505497 C143.100732,181.238841 145.042026,178.489552 146.98332,175.875285 C148.676209,173.597138 150.061821,171.116457 151.329693,168.586938 C153.93723,163.391441 155.961804,157.852642 156.955425,152.124237 C158.065351,145.710664 158.273552,139.470897 157.661872,133.00705 C156.870708,124.685924 155.5253,116.337506 151.929886,108.72884 C146.477894,97.1815359 134.363474,90.3700773 122.050905,88.6923499 C119.401728,88.3318108 116.888959,88 114.291473,88 C113.562052,88 112.826887,88.0272918 112.0788,88.0861846"
          id="Fill-640"
          fill={props.fill}
        ></animated.path>
        <animated.path
          d="M102.080481,221.639858 C108.545176,220.819694 114.829335,219.680738 120.904069,217.530342 C120.21947,220.227031 119.552202,222.928067 118.85316,225.613164 C117.245652,231.812216 115.700249,238.021412 114.164956,244.230608 C112.658549,250.309389 111.181028,256.399762 109.696285,262.479992 C108.95247,265.512861 108.071445,268.519648 107.25397,271.536578 C106.062421,275.961989 104.794324,280.338131 103.152153,284.614289 C103.131932,284.65921 103.110268,284.70558 103.088603,284.751949 C102.512327,284.683844 101.937495,284.615738 101.369884,284.554878 C99.8649212,284.401278 98.3642914,284.225943 96.8651059,284.040464 C95.5637898,283.815861 94.274028,283.578216 92.9929321,283.289854 C91.9487017,272.972591 91.677173,262.558241 91.1066737,252.217792 C90.7571526,245.928899 90.5029554,239.600881 89.8717954,233.333723 C89.5497161,230.164642 89.2623,226.983969 88.9070017,223.813439 C88.8217878,223.065727 88.7250196,222.312219 88.6253628,221.551466 C91.1355597,221.819541 93.6472009,221.996326 96.1761738,221.996326 C98.1288702,221.996326 100.093121,221.891994 102.080481,221.639858 M88.0100901,212.758607 C87.9927585,212.796283 87.9768711,212.836856 87.9609838,212.874532 C87.9768711,212.836856 87.9927585,212.796283 88.0100901,212.758607 M115.401278,186.280046 C115.128305,186.790113 114.845222,187.28569 114.546251,187.771123 C114.385934,187.933417 114.222728,188.092813 114.058077,188.25076 C113.405253,188.64925 112.740874,189.018758 112.062052,189.36798 C108.360306,190.65474 104.489576,191.483599 100.621735,192.112488 C97.2420687,192.41679 93.920174,192.33999 90.5405073,192.029892 C89.8140233,191.921213 89.0875394,191.812534 88.3596112,191.702406 C85.9331838,191.345939 83.4966462,190.921366 81.042777,190.85326 C79.0727491,190.796747 76.7604215,191.186543 74.9261579,191.503886 C72.4838432,191.928458 70.3390546,192.976124 68.0541688,193.960032 C66.305119,194.719336 64.8391525,196.207514 63.4843972,197.537746 C61.2399518,199.746104 60.3878136,201.935624 59.2641466,204.8062 C58.1534783,207.663734 57.9281672,210.982067 58.0177139,214.043918 C58.0971506,216.743505 58.5087766,219.460481 58.7904155,222.144129 C59.5804487,229.553141 60.2520492,236.979542 60.6420107,244.417536 C61.0695242,252.624977 61.4652629,260.832418 61.8999978,269.039858 C62.0964229,272.787112 62.3852833,276.528569 62.6726994,280.26423 C63.0164433,284.88816 63.2359772,289.733796 64.4997415,294.19978 C65.2117824,296.6965 66.0682535,299.339574 67.5688833,301.462438 C68.7763198,303.178118 69.6515669,304.411263 71.1290879,305.656 C72.8044782,307.065929 74.2097841,308.141127 76.0541578,309.126484 C80.0880934,311.282676 84.4325539,312.330342 88.88967,313.049073 C93.5215467,313.802581 98.2386371,314.328587 102.921064,314.679258 C104.749551,314.815469 106.576593,314.956028 108.405079,314.996601 C110.294226,315.041522 112.213704,314.634338 114.040746,314.180784 C117.026118,313.434521 119.10158,311.831867 121.426906,309.952445 C123.958768,307.903483 125.860914,304.943066 127.45109,302.113063 C129.054265,299.271469 130.176488,296.067611 131.412811,293.073866 C132.422378,290.606127 133.218188,288.052894 134.012554,285.511254 C134.645159,283.497069 135.157886,281.446657 135.705276,279.403492 C139.812871,264.160894 143.316748,248.764697 147.362238,233.498915 C149.020297,227.254942 150.600363,220.977641 152.433183,214.785834 C154.687738,207.186995 149.973536,198.983902 142.600374,196.636434 C143.059662,194.416484 143.023555,192.119733 142.39095,189.822983 C141.375606,186.114854 138.910183,182.906649 135.604175,180.964917 C133.346731,179.640482 130.771541,179 128.199239,179 C123.066189,179 117.944694,181.547437 115.401278,186.280046"
          id="Fill-642"
          fill={props.fill}
        ></animated.path>
        <animated.path
          d="M106.571252,290.798747 C100.184485,294.562742 98.1861801,302.853758 101.760999,309.276542 C103.50024,312.40075 105.101488,315.555112 106.576459,318.816979 C107.929058,321.823194 109.236093,324.880539 110.796984,327.789736 C114.137473,334.022419 117.7891,340.080735 121.018934,346.375037 C124.263088,352.694249 127.486413,359.018705 130.92454,365.230412 C134.347045,371.406721 137.753927,377.577785 140.667418,384.020235 C141.251938,385.310298 141.824742,386.602984 142.388434,387.899602 C143.216396,389.944824 144.026133,392.005779 144.705687,394.104754 C145.804429,397.500347 147.746756,400.332193 150.859426,402.159782 C153.951266,403.983439 157.718755,404.480323 161.171202,403.521953 C164.518201,402.595048 167.421276,400.342681 169.17614,397.325978 C169.623968,396.250926 170.075702,395.179806 170.523531,394.104754 C171.158823,391.713417 171.158823,389.326013 170.523531,386.934677 C170.280089,385.341763 169.715096,383.826201 169.14099,382.326372 C168.16462,379.7646 167.101026,377.235604 166.023113,374.715785 C164.568972,371.30446 162.997666,367.959997 161.384702,364.616845 C158.344934,358.301566 154.733664,352.243251 151.38276,346.087919 C148.040969,339.947008 144.990787,333.654017 141.648996,327.513107 C138.369692,321.484945 134.672502,315.708504 131.764219,309.481064 C129.577148,304.805896 127.430435,300.155638 124.914002,295.643039 C122.525148,291.359872 117.915377,289 113.265249,289 C110.954505,289 108.634648,289.580791 106.571252,290.798747"
          id="Fill-644"
          fill={props.fill}
          transform="translate(135.500000, 346.500000) rotate(6.000000) translate(-135.500000, -346.500000) "
        ></animated.path>
        <animated.path
          d="M55.3536462,207.288453 C51.7992836,213.580986 48.1140856,219.801141 44.5640842,226.095122 C40.5270842,233.241714 36.5860302,240.401334 32.7699967,247.666626 C28.8798232,255.079568 25.6714476,262.832687 22.4456273,270.551064 C21.1678013,273.609754 20.0106345,276.719107 18.8970796,279.847279 C17.0915507,284.918074 16.2512964,290.54473 17.8402201,295.786336 C20.4016871,304.212569 29.7709579,310.131633 38.5049499,307.271259 C44.6891047,305.246126 49.1753063,299.998729 49.1753063,293.321146 C49.1753063,291.132439 48.6679556,288.982816 47.7259405,287.034403 C48.4993232,284.867409 49.400634,282.735157 50.2321659,280.615933 C50.9473996,278.7978 51.7018839,276.995591 52.4636369,275.196277 C54.3505746,271.150353 56.1415663,267.047975 58.2160347,263.09759 C60.6001471,258.552259 62.9522774,253.9939 65.4730401,249.520947 C70.623595,240.405677 75.8933555,231.358442 81.0439104,222.244619 C85.0184001,215.203698 82.7869291,206.101456 75.7058247,201.973022 C73.4132972,200.638374 70.8387466,200.000001 68.2787333,200.000001 C63.1165486,199.998553 58.0066981,202.589681 55.3536462,207.288453"
          id="Fill-648"
          fill={props.fill}
        ></animated.path>
        <animated.path
          d="M118,201.799956 C118,205.947077 119.69196,209.205011 122.328406,212.259868 C122.778919,212.782066 123.225087,213.304264 123.668357,213.827912 C124.570833,215.134857 125.444336,216.460659 126.335223,217.777758 C128.032978,220.282857 129.871246,222.731385 131.964468,224.91156 C134.183718,227.229538 136.927359,229.128308 139.542075,230.941495 C143.389547,233.604703 147.412299,236.102549 151.4872,238.403121 C155.283971,240.545582 163.517792,244.053011 167.501432,245.831385 C170.387035,247.129626 173.295817,248.443824 176.282822,249.498374 C177.656092,249.984308 179.045295,250.418022 180.417116,250.909758 C182.846412,252.308088 185.365521,252.994198 188.07005,253 C192.024718,253 195.867844,251.407297 198.662186,248.607736 C204.372553,242.885319 204.518861,233.088308 198.662186,227.387648 C197.31644,226.079253 195.79976,224.786813 194.125183,223.909231 C192.596913,223.11578 190.973037,222.538462 189.388273,221.869758 C188.262713,221.39978 187.067622,221.076308 185.90295,220.71367 C184.352952,220.232088 182.831926,219.679429 181.326835,219.087604 C177.412727,217.304879 169.242644,213.926549 165.463257,211.86822 C163.414942,210.752747 161.428916,209.516879 159.442891,208.298418 C157.556818,207.140879 155.659157,205.994945 153.836823,204.744571 C153.121217,204.100527 152.446171,203.427473 151.801545,202.710901 C150.935285,201.46633 150.095099,200.202901 149.25781,198.938022 C147.464448,196.253055 145.33646,193.776967 143.23165,191.334242 C140.76469,188.47811 136.440631,187 132.780028,187 C128.876061,187 125.08943,188.569495 122.328406,191.334242 C119.573176,194.093187 118,197.890725 118,201.799956 Z"
          id="Fill-650"
          fill={props.fill}
        ></animated.path>
        <animated.path
          d="M193.447423,14.7816147 C193.712368,22.4947693 193.171143,30.2093727 193.049297,37.9167323 C192.92745,45.9355736 193.049297,53.9442736 193.220732,61.9573198 C193.557935,77.7009057 194.138831,93.4111704 194.892579,109.137371 C195.246784,116.478197 195.445139,123.817573 195.755422,131.158399 C196.092625,139.364129 196.463832,147.564064 196.646602,155.769794 C196.823704,163.630722 196.69619,171.495995 196.6296,179.356923 C196.563009,187.274351 196.69619,195.185985 196.850624,203.097619 C197.15524,218.387745 196.956885,233.67932 196.87896,248.969447 C196.840706,256.518893 196.97247,264.085723 196.740112,271.629374 C196.490751,279.552598 195.965111,287.446846 195.500395,295.35848 C195.30629,298.692058 195.090934,302.035777 195.185861,305.37515 C195.273704,308.679753 195.528731,311.968419 195.656245,315.273022 C195.926857,322.183568 195.965111,329.024574 195.589654,335.935121 C195.218448,342.674714 194.59363,349.482399 194.664471,356.239377 C194.704142,359.510659 195.05268,362.731234 195.450806,365.973541 C195.873018,369.43316 196.436912,372.962319 196.275395,376.453811 C196.191803,377.081121 196.10821,377.711328 196.026035,378.338637 C196.037369,380.986956 196.690523,383.455629 197.991163,385.747554 C199.867032,389.028977 202.982619,391.480265 206.570006,392.492942 C214.019643,394.592184 222.265532,389.979358 224.224994,382.238677 C225.181347,378.469025 225.403788,374.763118 225.104839,370.925374 C224.977325,369.272348 224.771886,367.620771 224.584866,365.973541 C224.179656,362.408162 223.815533,358.848579 223.897709,355.24988 C224.069144,347.77432 224.62312,340.314697 224.8994,332.844933 C225.187014,324.950684 224.866813,317.128873 224.362425,309.25201 C223.876456,301.622883 224.594784,293.960434 225.070835,286.348692 C226.034272,271.119413 225.735323,255.851018 225.845835,240.594213 C225.906759,232.688374 226.022938,224.782536 225.996018,216.870902 C225.967682,209.136016 225.796247,201.405476 225.712654,193.669142 C225.541219,177.880645 226.122115,162.102289 225.586557,146.313791 C225.059501,130.784621 224.472937,115.24386 223.654016,99.7262795 C222.89035,85.3184428 222.52481,70.899016 222.15502,56.4737942 C221.977918,49.6313395 221.966583,42.7946797 222.038841,35.9536736 C222.11535,28.8910086 222.597068,21.8442798 222.353375,14.7816147 C222.215944,10.8149323 220.898302,7.1698727 218.119918,4.3288704 C215.41946,1.57334446 211.717311,0 207.897566,0 C200.232572,0 193.171143,6.7280034 193.447423,14.7816147"
          id="Fill-652"
          fill={props.fill}
        ></animated.path>
        <animated.path
          d="M126.65284,47.3210456 C126.495579,47.4567554 126.331104,47.585169 126.162302,47.7048272 C126.325333,47.5764136 126.489808,47.4479999 126.65284,47.3210456 M191.802109,5.60120925 C178.59797,9.68271965 165.657856,15.5313767 154.437512,23.7279601 C148.631845,27.9743653 143.052693,32.5578562 137.423043,37.0435777 C134.954481,39.0106409 132.553728,41.0448295 130.242427,43.2118095 C128.466389,44.8724312 126.808658,46.6629257 125.057147,48.3556508 C119.459239,51.6316575 116.810331,58.7848803 118.50846,65.0260744 C119.524163,68.7369363 121.981183,71.9574917 125.260577,73.9070441 C128.473603,75.8055228 132.982228,76.6708555 136.583357,75.3998525 C140.184486,74.1288494 142.720858,72.6696037 145.56598,70.1100866 C145.99448,69.7175495 146.434522,69.3410641 146.85148,68.936853 C148.018672,67.8249077 149.178651,66.7012885 150.357386,65.6010172 C152.218547,63.8747295 154.161944,62.2549667 156.137083,60.665848 C159.46553,58.100494 162.782435,55.5220067 166.089241,52.9216308 C169.6644,50.1592786 173.303041,47.4392445 177.228791,45.2065984 C181.50946,42.7681988 185.85361,40.5720339 190.30741,38.5144974 C193.462726,37.3149974 196.628142,36.1899189 199.861367,35.1859578 C207.763363,32.7460989 212.700488,24.5495155 210.456996,16.3179101 C208.669416,9.74984495 202.406395,5.00145925 195.799997,5 C194.469773,5 193.126563,5.19262044 191.802109,5.60120925"
          id="Fill-654"
          fill={props.fill}
        ></animated.path>
        <animated.path
          d="M132.461333,349.82121 C130.552605,356.853454 134.749733,364.347238 141.673247,366.288075 C144.56679,367.096756 147.417573,367.977759 150.233368,369.007349 C151.846651,369.777898 153.430131,370.595784 155.036936,371.388687 C157.28387,372.498488 159.572271,373.500464 161.859376,374.506385 C166.582604,376.5774 171.117939,379.032373 175.668824,381.466308 C180.07717,383.829237 184.466078,386.232928 188.773351,388.786522 C190.945129,390.075153 193.13116,391.3388 195.353474,392.530127 C196.987491,393.4085 198.627986,394.265834 200.208875,395.223103 C201.178141,396.369721 202.322341,397.34014 203.64018,398.129097 C206.763082,399.983148 210.568876,400.486766 214.06238,399.516348 C221.1077,397.543954 225.531595,389.824001 223.50754,382.632651 C222.647122,379.582014 221.01181,376.710207 218.566616,374.686531 C216.952037,373.351877 215.46963,372.242076 213.712511,371.219061 C212.522958,370.536613 211.288051,369.93043 210.058327,369.329507 C207.376,368.014577 204.76883,366.586564 202.166844,365.117787 C196.776274,362.06715 191.263898,359.262405 185.767072,356.422157 C182.937022,354.957325 180.112156,353.509588 177.212134,352.189398 C174.610147,351.002017 171.938187,349.980316 169.366004,348.727188 C165.671649,346.92442 162.052452,344.992788 158.205191,343.534531 C155.077106,342.34715 151.90885,341.366212 148.688762,340.468115 C147.554929,340.151217 146.408137,340 145.275599,340 C139.487215,340 134.057771,343.940844 132.461333,349.82121"
          id="Fill-656"
          fill={props.fill}
        ></animated.path>
      </g>
    </g>
  );
};

Entering.defaultProps = {
  fill: "#000000",
  x: 0,
  y: 0,
  originX: 0,
  originY: 0,
  toX: 0,
  toY: 0,
  toggle: false
};

Entering.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  originX: PropTypes.number,
  originY: PropTypes.number,
  toX: PropTypes.number,
  toY: PropTypes.number,
  toggle: PropTypes.bool
};

export default Entering;