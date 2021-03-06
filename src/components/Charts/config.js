import { parseOptions } from "@/components/Charts/optionHelpers";
import Chart from 'chart.js'

export const Charts = {
  mode: 'light',//(themeMode) ? themeMode : 'light';
  fonts: {
    base: 'Poppins-Regular'
  },
  colors: {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#9c9c9c',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#F7B62D',
      'secondary': '#f4f5f7',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent',
  }
};

function chartOptions() {
  let { colors, mode, fonts } = Charts;
  // Options
  let options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: (mode === 'dark') ? colors.gray[700] : colors.gray[600],
        defaultFontColor: (mode === 'dark') ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 14,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme['primary']
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'rounded'
          },
          rectangle: {
            backgroundColor: colors.theme['primary']
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: (mode == 'dark') ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false,
        }
      },
      pie: {
        tooltips: {
          mode: 'point'
        }
      },
      doughnut: {
        tooltips: {
          mode: 'point'
        },
        cutoutPercentage: 83,
        legendCallback: function (chart) {
          let data = chart.data;
          let content = '';

          data.labels.forEach(function (label, index) {
            let bgColor = data.datasets[0].backgroundColor[index];

            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += '</span>';
          });

          return content;
        }
      }
    }
  };

  // yAxes
  Chart.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      borderDash: [0],
      borderDashOffset: [2],
      color: (mode === 'dark') ? colors.gray[900] : '#414242',
      drawBorder: false,
      drawTicks: true,
      zeroLineWidth: 1,
      zeroLineColor: (mode === 'dark') ? colors.gray[900] : '#414242',
      zeroLineBorderDash: [0],
      zeroLineBorderDashOffset: [0]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function (value) {
        if (!(value % 10)) {
          return value
        }
      }
    }
  });

  // xAxes
  Chart.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false,
      lineWidth: 1,
      zeroLineWidth: 1,
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });

  return options;
};

let initialized = false

export function initGlobalOptions() {
  if (initialized) {
    return
  }
  parseOptions(Chart, chartOptions());
  initialized = true
}

export const basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
export let blueChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        color: Charts.colors.gray[700],
        zeroLineColor: Charts.colors.gray[700]
      }
    }]
  }
};

export let lineChartOptionsBlue = {
  ...basicOptions,
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: '#9e9e9e'
        }
      }
    ],

    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,
          fontColor: '#9e9e9e'
        }
      }
    ]
  }
};
