import React from "react";
import PropTypes from "prop-types";
import { animated } from "react-spring/renderprops";

const PentagramStar = props => {
  return (
    <g
      id="pentagram_DL"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform="translate(-400, -400)"
    >
      <animated.path
        d="M417.609367,515.729294 C423.153686,512.421706 428.692869,509.114118 434.22178,505.783418 C436.181166,513.466884 438.11744,521.150349 439.889363,528.880039 C442.025941,538.18905 443.510247,547.677822 445.056185,557.097258 C445.877946,562.143384 446.668891,567.179238 447.631892,572.194549 C448.078725,574.518591 448.659094,576.781002 449.313934,579.025437 C441.995125,571.290611 435.120581,563.103817 428.25374,555.012039 C419.666338,544.881267 411.179087,534.668318 402.453012,524.64797 L402.373404,524.558089 C407.463186,521.633134 412.570945,518.733858 417.609367,515.729294 Z M327.308103,516.771904 C329.950578,510.310808 332.605894,503.854848 335.245801,497.39632 C339.072126,500.619164 342.813706,503.955 346.598943,507.2215 C348.874194,509.198862 350.972252,511.425321 353.147351,513.52338 C354.446761,514.766293 355.78469,515.988663 357.102076,517.229008 C353.062607,519.904868 349.082202,522.668039 345.194245,525.569883 C334.61664,533.46906 324.262451,541.622471 313.918534,549.814401 C318.340636,538.787395 322.81153,527.778365 327.308103,516.771904 Z M447.773132,434.005161 C446.884603,429.726868 445.978098,425.451143 445.058753,421.177985 C457.45964,422.153826 469.847688,423.214412 482.220327,424.634518 C489.860137,425.520479 497.499946,426.388464 505.152596,427.084393 C504.710899,427.346329 504.269202,427.605697 503.827506,427.865066 C497.759314,431.44743 491.691123,435.037498 485.630635,438.619863 C474.56511,445.155431 463.720432,452.099312 452.842371,458.950744 C451.170601,450.632982 449.496263,442.312651 447.773132,434.005161 Z M357.582293,437.895686 C359.729143,431.53731 361.99669,425.207182 364.233421,418.877054 C364.503061,418.109221 364.782974,417.346525 365.073158,416.583828 C373.44228,416.814948 381.813971,417.09486 390.183093,417.444109 C398.654936,417.795925 407.11137,418.337774 415.562668,418.943823 C418.443968,431.984143 421.253364,445.034735 423.870159,458.128983 C424.984672,463.737502 426.052962,469.369133 427.167475,474.99306 C423.595382,477.188703 420.013018,479.363801 416.415246,481.51322 C404.908023,488.392901 393.233881,495.002941 381.749771,501.918573 C381.359434,501.502557 380.971666,501.08654 380.583897,500.673092 C378.247014,498.174425 375.627651,495.87863 373.1598,493.500659 C370.994973,491.4026 368.907187,489.16587 366.629368,487.191075 C363.380844,484.38168 360.140024,481.572284 356.888932,478.755185 C353.404151,475.735213 349.821787,472.830801 346.221447,469.944366 C350.24294,459.348785 353.948568,448.635075 357.582293,437.895686 Z M322.452009,450.787062 C316.525058,445.912992 311.006419,440.515049 305.5905,435.088859 C300.313254,429.791068 295.850064,423.702332 290.983698,418.055293 C290.115713,417.046068 289.229752,416.047115 288.338655,415.053298 C294.486454,415.186834 300.634254,415.387138 306.784622,415.52581 C316.514786,415.749227 326.250086,415.833971 335.982818,415.967507 C335.849282,416.370683 335.713178,416.771292 335.574505,417.1719 C334.380384,420.582209 333.155446,423.992517 332.002413,427.423369 C329.876106,433.763769 327.888472,440.163233 325.602949,446.444569 C324.955812,448.221627 324.306107,449.998685 323.656403,451.775743 L322.452009,450.787062 Z M387.604818,369.925778 C391.143526,362.889449 394.435706,355.747832 397.596918,348.544583 C398.385295,350.976482 399.140288,353.413517 399.864465,355.850552 C402.03186,363.164225 404.106806,370.457354 406.001993,377.850636 C406.780098,380.873175 407.532523,383.903419 408.266971,386.938799 C406.84173,386.848919 405.41392,386.761607 403.98611,386.676863 C395.891764,386.199214 387.787146,385.849965 379.677392,385.585461 C382.322435,380.369847 384.975183,375.154232 387.604818,369.925778 Z M381.826811,315.263262 C379.086751,320.48658 377.004101,326.059147 374.764802,331.513586 C369.628796,343.418849 364.056229,355.075015 358.124141,366.623326 C355.014289,372.688949 351.986614,378.782821 348.989754,384.910076 C338.93859,384.771404 328.884857,384.702068 318.831125,384.66098 C305.621316,384.60962 292.40894,384.360524 279.199131,384.319436 C276.068736,384.309164 272.928068,384.491492 269.807944,384.740588 C266.518332,385.012796 263.249264,385.423677 259.9879,385.965526 C257.802529,386.325046 255.61459,387.277775 253.78874,388.482169 C251.531465,389.81753 249.736431,391.612565 248.401069,393.859567 C247.638372,395.153841 247.027188,396.527723 246.585491,397.973509 C246.346667,399.737727 245.833066,401.473697 246.053914,403.248187 C246.374915,405.767398 246.385187,406.889616 247.199244,408.887522 C248.080069,411.052349 248.932646,413.119591 250.116495,415.125202 C252.14265,418.53551 254.792829,421.617114 257.481529,424.534365 C261.81375,429.218403 266.256395,433.774041 270.501305,438.537687 C274.774462,443.334717 278.757435,448.409091 283.179536,453.064881 C292.390964,462.756525 302.642433,471.387584 313.114749,479.669394 C312.197972,481.980597 311.268355,484.286664 310.325898,486.587594 C299.270644,513.513108 288.433671,540.518229 277.666034,567.551599 C275.054374,573.627494 272.388787,579.65203 269.438151,585.586685 C269.373951,585.715085 269.309751,585.846053 269.250687,585.977022 C269.070927,586.14651 268.893735,586.318566 268.716542,586.490622 C263.13884,591.865453 256.436351,597.664004 254.250981,605.267862 C252.024522,613.033503 256.88832,621.369241 264.602601,623.495548 C268.42379,624.548429 272.596795,624.006581 276.017375,622.00097 C278.700939,620.437056 280.377845,618.34927 281.65671,615.827491 C289.132168,607.440392 297.647666,600.003455 306.335221,592.902926 C313.122453,587.695016 319.948206,582.551305 326.74571,577.361371 C334.780992,571.236683 342.649354,564.893715 350.56394,558.617516 C355.160666,555.145575 359.688055,551.524691 364.464541,548.330095 C368.930299,545.351211 373.329288,542.223383 377.85411,539.313836 C386.50828,549.246872 395.080275,559.231268 403.585502,569.295273 C408.248995,574.813912 412.956145,580.291463 417.640183,585.786989 C422.082829,591.002604 426.897835,595.928034 431.53308,600.97416 C436.378902,606.261679 441.835909,611.097229 447.411044,615.591234 C451.173169,618.61891 455.055989,621.579818 459.390779,623.73694 C461.737934,624.910518 464.002913,625.781071 466.560644,626.132887 C469.038767,626.805704 471.506618,626.805704 473.984741,626.132887 C475.530679,625.781071 477.004713,625.210974 478.399138,624.438005 C480.736021,622.791915 482.803264,621.358969 484.28757,618.81151 C485.751332,616.312843 486.303452,613.814176 486.503756,610.966261 C486.714333,608.118345 485.892572,605.219069 485.209483,602.458466 C484.387722,599.14831 483.524873,595.848426 482.672296,592.548542 C481.108382,586.508598 479.261987,580.581647 477.346257,574.631584 C475.320103,568.37336 474.256949,561.973896 473.211772,555.492256 C470.946793,541.46839 468.538006,527.536973 465.379362,513.682596 C463.579192,505.80653 461.475997,498.012641 459.526883,490.177663 C469.454783,483.922007 479.37498,477.632967 489.403032,471.531392 C495.943736,467.548419 502.504984,463.596262 509.115024,459.705737 C514.751791,456.385309 520.498983,453.213825 526.048437,449.754725 L534.926024,444.215542 C538.747213,441.829867 542.347554,438.958839 545.729614,436.0005 C549.882075,432.359071 553.122895,427.395121 554.365809,422.027994 C555.138778,418.687022 554.786961,415.967507 554.0936,412.688167 C553.451599,409.647651 551.425445,407.390376 549.471195,405.143373 C548.097313,403.579459 546.06859,402.467514 544.173404,401.653457 C542.309034,400.85224 540.562791,400.027911 538.626517,399.506606 C534.543392,398.422909 530.349843,397.981213 526.166566,397.47018 C519.797918,396.697211 513.336822,396.537995 506.937358,395.955058 C500.247709,395.333601 493.586309,394.560632 486.904365,393.769687 C472.831707,392.092781 458.756482,390.680379 444.624761,389.617226 C442.357214,389.44517 440.089667,389.270546 437.824688,389.095922 C435.672701,379.994918 433.435971,370.914459 431.101656,361.85968 C429.776566,356.703129 428.091956,351.628755 426.566562,346.531269 C423.998559,337.92589 420.778283,329.428368 417.267823,321.172237 C415.642277,317.340777 413.698298,313.920196 411.058391,310.689648 C407.768779,306.678427 402.953773,304 397.676526,304 C390.424485,304 384.998295,309.246431 381.826811,315.263262 Z"
        id="pentagram"
        fill={props.fill}
      ></animated.path>
    </g>
  );
};

PentagramStar.defaultProps = {
  fill: "#000000",
  width: "800px",
  height: "100px",
  x: 0,
  y: 0,
  originX: 0,
  originY: 0,
  toX: 0,
  toY: 0,
  toggle: false
};

PentagramStar.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  originX: PropTypes.number,
  originY: PropTypes.number,
  tox: PropTypes.number,
  toY: PropTypes.number,
  toggle: PropTypes.bool
};

export default PentagramStar;