import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular',
        yAxisName: 'Stars',
        yAxisNameFontSize: 14,
        xAxisName: 'Repos',
        xAxisNameFontSize: 14,
        showCanvasBorder: 0,
        showAlternateHGridColor: 0,
        usePlotGradientColor: 0,
        valueFontSize: 14,
        placeValuesInside: 0,
        divLineColor: '#102a42',
        divLineAlpha: 15,
        captionFontColor: '#102a42',
        captionFontBold: 0,
        captionFontSize: 18,
        captionFont: 'Roboto',
        baseFont: 'Open Sans',
        baseFontSize: 14,
        baseFontColor: '#617d98',
        smartLineColor: '#617d98',
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
        bgColor: '#FFFFFF',
        showBorder: 0,
        chartLeftMargin: '40',
        chartTopMargin: '40',
        chartRightMargin: '40',
        chartBottomMargin: '40',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
