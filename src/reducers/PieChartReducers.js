import {PIE_CHART_TITLE_CONFIG, PIE_CHART_SUB_TITLE_CONFIG} from '../constants/PieChartConstants';

let data = [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }];

const initialDrawerState = {
  chartTitleConfig : {
         text : 'Browser Popularity in 2018',
         align : 'center',
         margin : 15,
         useHTML : false,
         verticalAlign : 'top',
         style:{
         	color:"#333333",
         	fontWeight: "bold",
         	fontSize : 18,
         	fontFamily : "Roboto"
         }
    },
    chartSubTitleConfig : {
           text : 'Chart Sub Title should be here',
           align : 'center',
           margin : 10,
           useHTML : false,
           verticalAlign : 'top',
           style:{
            color:"#99999",
            fontWeight: "bold",
            fontSize : 12,
            fontFamily : "Roboto"
           }
      },
  chartData : data
}

export default function PieChrtsConfig(state = initialDrawerState, action){
  switch (action.type) {
    case PIE_CHART_TITLE_CONFIG:
        return Object.assign({}, state, {
            chartTitleConfig: action.chartTitleConfig
        });
    case PIE_CHART_SUB_TITLE_CONFIG:
        return Object.assign({}, state, {
            chartSubTitleConfig: action.chartSubTitleConfig
        });
    default:
      return state;
  }
}
