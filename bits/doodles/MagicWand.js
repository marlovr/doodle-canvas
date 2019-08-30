import React from "react";
import PropTypes from "prop-types";
import { animated } from "react-spring/renderprops";

const MagicWand = props => {
  return (
    <g
      id="magic-wand_DL"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
      transform="translate(-450, -550)"
    >
      <animated.path
        d="M405.309024,526.035258 C404.436266,527.172625 403.535111,528.285355 402.60057,529.362211 C397.663027,535.095986 392.469065,540.574266 387.603081,546.3734 C377.94267,557.906309 368.41345,569.54617 359.075054,581.334573 C354.30448,587.739764 349.605466,594.156839 345.204612,600.823467 C340.666605,607.739647 336.194192,614.703361 331.298392,621.387814 C324.243907,630.995601 316.92704,640.347893 309.383571,649.563525 C305.769862,653.99606 302.203859,658.476128 298.435106,662.79577 C294.541126,667.252072 290.235683,671.868801 284.528885,673.936525 C279.841797,675.629919 274.623983,675.142697 269.942858,673.585962 C263.675518,671.500413 257.271023,668.529545 252.566046,663.746448 C250.449104,661.589598 248.350052,658.779157 247.533091,655.808289 C247.211077,654.673418 247.115666,653.48507 247.026218,652.302665 C246.835395,650.353776 247.723914,648.523721 248.469316,646.824385 C249.328019,644.899262 250.985793,643.253401 252.285774,641.625366 C258.761827,633.574314 265.166322,625.285593 272.369887,617.834656 C280.521604,609.409275 289.233863,601.542417 297.731446,593.467598 C301.905698,589.498518 305.954722,585.458138 310.057415,581.441525 C313.665161,577.894308 317.326576,574.246083 320.65405,570.467139 C335.102924,554.067948 348.866027,537.116176 362.390602,519.986152 C364.994801,516.502161 367.614847,513.039224 370.066786,509.448726 C370.039235,509.450857 370.011684,509.452986 369.984133,509.455114 C364.808615,509.870239 359.633098,510.083732 354.45758,510.593742 C351.623227,510.848747 348.794815,511.145264 345.960462,511.423991 C342.924079,511.75016 339.650015,512.052608 336.726531,511.008866 C333.844641,509.965125 331.711448,508.411372 330.273475,505.659689 C328.877095,502.96731 328.787964,500.743428 329.251444,497.825695 C329.827821,494.119225 331.800579,490.644039 333.892177,487.566187 C335.496528,485.199977 337.142474,482.88714 338.883492,480.639536 C342.829007,475.539434 346.79829,470.492705 350.90424,465.534931 C354.178304,461.597178 357.66034,457.843265 361.142376,454.113074 C363.638033,451.408834 366.121806,448.710524 368.766014,446.160473 C368.72442,446.059657 368.688768,445.95291 368.653115,445.852095 C367.227026,442.714939 365.640501,439.660808 364.208469,436.529582 C362.301074,432.336823 360.447157,428.144065 358.819038,423.862351 C357.541499,420.547285 356.198598,417.119542 355.479611,413.644356 C354.713088,410.00905 354.130768,406.278859 355.432075,402.685066 C357.428601,397.217282 362.301074,393.908146 367.940071,393.000802 C378.04154,391.358095 388.463879,395.343291 397.400708,399.71989 C400.948107,401.457483 404.501447,403.218798 407.959715,405.163953 C411.417982,407.13283 414.87625,409.101706 418.215677,411.260354 C420.859885,412.938644 423.361484,414.765192 425.833373,416.656974 C426.516708,416.218128 427.188158,415.767421 427.847725,415.292993 C431.733819,412.155837 435.524841,408.900074 439.410936,405.745127 C443.659495,402.293663 447.973417,398.913362 452.340817,395.598296 C456.351694,392.514513 460.41605,389.484104 464.735914,386.815445 C467.683166,385.03634 470.885926,383.553752 474.136222,382.486289 C475.06318,382.183841 476.536806,382 477.951012,382 C479.10971,382 480.238698,382.118607 481.005221,382.391403 C483.209718,383.156419 485.182476,383.85027 486.923494,385.522629 C488.058423,386.607883 488.967556,387.859187 489.823209,389.181656 C490.453066,390.545637 491.005675,391.939269 491.492923,393.374414 C491.843503,395.455968 492.330751,397.614615 492.306982,399.71989 C492.259446,401.528647 492.146547,403.289962 491.938576,405.092789 C491.492923,408.82298 490.797704,412.529449 489.734079,416.146964 C488.735816,419.598428 487.594944,423.00245 486.460014,426.406472 C484.974504,430.783071 483.417689,435.14188 481.795512,439.471036 C479.008695,446.943279 475.895066,454.231681 472.561581,461.448919 C474.409556,463.311049 476.245646,465.17911 477.91536,467.225081 C480.933916,470.836665 483.833632,474.566856 486.691754,478.297048 C489.335962,481.748512 491.962344,485.176255 494.606552,488.609929 C496.674382,491.272657 498.920474,493.911663 500.596129,496.853117 C501.891494,499.148163 502.98483,501.603329 503.959324,504.058494 C505.795415,508.690099 505.331936,513.76648 501.523088,517.330621 C493.95887,524.375879 483.904937,517.241666 476.54869,513.345425 C469.840126,509.805005 462.994896,506.51366 455.983288,503.548484 C456.821115,503.898375 457.629233,504.242335 458.467061,504.592226 C455.650533,503.406156 452.857774,502.172643 450.065015,500.933199 C447.165299,508.897661 445.358919,517.277248 443.14848,525.437412 C441.288621,532.251385 438.852384,538.994195 436.208176,545.523512 C435.25745,547.842279 434.44339,550.528729 433.04701,552.657725 C431.311935,555.367896 429.125264,557.710384 425.874967,558.611798 C423.046556,559.376813 419.612056,559.009131 417.080747,557.526543 C412.600448,554.905328 410.467256,549.645106 409.118413,544.900825 C408.423194,542.44566 407.840874,539.966773 407.288264,537.487886 C406.443807,533.710798 405.832935,529.880285 405.309024,526.035258 Z M380.406472,423.043963 C380.572849,423.453157 380.75111,423.868282 380.917487,424.277476 C380.75111,423.868282 380.578791,423.453157 380.406472,423.043963 Z M427.705116,418.092119 C427.954682,418.28189 428.204247,418.477592 428.453813,418.673294 C428.216131,418.477592 427.972508,418.293751 427.728884,418.10398 C427.722942,418.09805 427.711058,418.09805 427.705116,418.092119 Z M470.149113,408.437507 C467.802007,410.103936 465.514321,411.86525 463.244461,413.614704 C458.419524,417.380477 453.636182,421.187763 448.947911,425.107725 C445.465876,428.007667 442.031376,431.061798 438.341369,433.659292 C436.184408,435.165601 434.09281,436.274577 431.656573,437.270876 C429.891787,437.988448 428.614248,438.17822 426.617722,438.433225 C422.719744,438.919514 418.726692,437.644488 415.619005,435.278278 C405.701739,427.811965 394.762442,421.359743 383.389376,416.307083 C381.268068,415.482765 379.134875,414.753331 376.960088,414.172157 C377.881105,416.906049 378.980382,419.592498 380.067776,422.231505 C381.309662,424.971327 382.575317,427.693358 383.888508,430.41539 C385.748367,434.258257 387.905327,438.267175 389.040257,442.3947 C389.854317,445.401388 390.222723,448.206444 389.693882,451.266505 C389.414606,452.790606 388.719387,454.113074 388.113299,455.500776 C387.251703,457.428141 385.166047,458.584559 383.704305,460.043426 C381.731547,462.012302 379.824152,464.052343 377.922699,466.092384 C370.685293,473.843354 363.80441,481.819676 357.244397,490.110308 C359.318169,489.950188 361.397884,489.801929 363.48354,489.64774 C370.548626,489.173312 377.554292,488.639581 384.5659,487.874565 C387.025905,487.45351 389.491852,487.079898 391.898379,486.475002 C395.445777,485.59731 398.904045,484.648454 402.38608,483.462384 C407.585366,481.724791 413.39074,485.43126 414.781177,490.507641 C414.81683,490.632179 414.852482,490.768577 414.882192,490.893114 C419.404085,492.013951 423.313948,496.200779 422.99902,501.045876 C422.963367,501.61519 422.969309,502.13113 423.004962,502.658931 C423.587282,506.442496 424.104239,510.243851 424.603371,514.045206 C425.251053,511.548528 425.904678,509.04592 426.617722,506.561103 C427.271347,504.266057 427.871493,501.929498 428.59048,499.658174 C429.452076,496.971724 430.379034,494.326788 431.47237,491.735224 C432.773677,488.675163 434.09281,485.502425 436.487452,483.094702 C438.852384,480.686979 442.774131,477.83448 446.398776,478.231814 C448.181388,478.439376 449.898638,478.552053 451.574293,479.18067 C452.52502,479.572073 453.475746,479.987198 454.402705,480.384531 C456.096186,481.125825 457.771842,481.890841 459.441555,482.655856 C461.818372,483.72925 464.224898,484.761131 466.61954,485.793012 C466.32838,485.413469 466.043162,485.039857 465.752002,484.666245 C463.933738,482.442363 462.121416,480.248133 460.208079,478.136928 C456.957782,474.590578 452.732991,471.489004 451.176177,466.786235 C449.880812,462.848482 450.920669,459.60458 452.548788,456.058229 C453.059804,454.925532 453.612413,453.786905 454.123429,452.654208 C455.074155,450.584515 456.007056,448.502962 456.92213,446.397687 C459.132569,440.965485 461.25982,435.509562 463.202867,429.976544 C465.710408,422.895704 468.378384,415.761491 470.149113,408.437507 Z M470.677954,397.241003 C470.767085,397.472287 470.874042,397.703571 470.969114,397.940785 C470.879984,397.703571 470.778969,397.472287 470.677954,397.241003 Z M280.056473,654.043594 C279.776202,654.085186 279.495931,654.126778 279.209696,654.16837 C279.495931,654.144603 279.776202,654.108953 280.056473,654.043594 Z M275.697362,644.99433 C274.039588,647.020462 272.369887,649.028769 270.70615,651.048959 C271.767602,651.613424 272.852908,652.136296 273.95014,652.62946 C275.297826,653.134508 276.645513,653.580138 278.034943,653.948526 C283.634403,649.070361 288.136631,642.849363 292.793903,637.145297 C296.789258,632.26119 300.736908,627.359258 304.648778,622.409792 C304.917122,622.053288 305.179504,621.696784 305.441885,621.34028 C310.945934,614.085421 316.181638,606.670135 321.226519,599.08848 C318.054088,602.255425 314.851841,605.392661 311.595925,608.482364 C303.068525,616.563125 294.380119,624.477517 286.204549,632.879131 C282.477539,636.705609 279.078506,640.858882 275.697362,644.99433 Z M358.55029,581.988164 C358.377357,582.202067 358.210387,582.415969 358.043417,582.629872 C358.210387,582.415969 358.377357,582.202067 358.55029,581.988164 Z M290.330465,432.094183 C292.113072,428.926372 295.555145,427 298.991354,427 C300.639092,427 302.28683,427.446429 303.75279,428.412673 C305.465031,429.556265 307.183135,430.602009 308.989197,431.513214 C315.374917,433.806513 322.135922,434.754411 328.767922,435.916349 C331.172096,436.344432 333.482448,438.545999 334.655215,440.643604 C335.980443,443.010289 336.349864,445.902905 335.657932,448.550901 C334.971863,451.131628 333.324124,453.357658 331.125185,454.690829 C328.674101,456.195234 326.246472,456.195234 323.543243,455.718227 C313.258071,453.926396 302.538975,452.611571 293.860495,446.092484 C291.702603,444.46577 290.07832,442.722863 289.34534,439.977018 C288.659271,437.322906 288.999374,434.460868 290.330465,432.094183 Z M410.945444,326.850888 C412.804228,325.030796 415.360806,324 417.995586,324 C420.624351,324 423.186945,325.030796 425.045728,326.850888 C427.066929,328.830018 427.650431,331.062428 427.95722,333.754279 C428.005344,334.172488 428.053468,334.584807 428.107607,335.003016 C429.725771,345.464127 432.474845,355.636615 435.620941,365.756091 C437.166919,370.798158 433.810282,376.276105 428.709155,377.654427 C423.421549,379.079871 418.133942,375.95214 416.563902,370.910073 C412.780166,358.693663 409.537822,346.453691 408.033952,333.754279 C407.751225,331.339271 409.279157,328.506053 410.945444,326.850888 Z M540.089242,394.438806 C540.992512,394.134567 541.91971,394 542.834944,394 C547.249601,394 551.472837,397.258862 552.639311,401.407037 C553.363123,403.993064 552.986262,406.801419 551.610421,409.089059 C550.162796,411.534668 548.105015,412.675562 545.508862,413.68189 C545.239676,413.793054 544.970489,413.892516 544.701303,414.003681 C538.623672,416.68917 532.988703,420.024092 527.425517,423.575491 C522.729709,426.594473 516.089777,424.540863 513.379967,419.988988 C510.46079,415.097769 512.398932,409.247029 517.070812,406.257301 C524.362773,401.594261 531.792318,397.206206 540.089242,394.438806 Z M458.017414,550.038921 C460.009492,548.062435 462.877605,547 465.709717,547 C468.403823,547 471.085929,547.961534 472.946002,550.038921 C478.688228,556.413532 484.172444,563.090848 488.582617,570.444798 C491.510733,575.288078 489.728663,581.781397 484.83247,584.606644 C479.76827,587.526857 473.558026,585.651273 470.509906,580.897024 C468.33782,577.51385 465.973727,574.296868 463.531631,571.115498 C461.707559,569.002498 459.889488,566.871692 458.017414,564.806176 C454.219264,560.562371 453.775247,554.235243 458.017414,550.038921 Z"
        id="magic-wand"
        fill={props.fill}
      ></animated.path>
    </g>
  );
};

MagicWand.defaultProps = {
  fill: "#000000",
  x: 0,
  y: 0,
  originX: 0,
  originY: 0,
  toX: 0,
  toY: 0,
  toggle: false
};

MagicWand.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  originX: PropTypes.number,
  originY: PropTypes.number,
  toX: PropTypes.number,
  toY: PropTypes.number,
  toggle: PropTypes.bool
};

export default MagicWand;