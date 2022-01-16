import { moneyHelpers } from "./moneyHelpers"
const { formattedMoney } = moneyHelpers

const chartOptions = (currency) => {
  return {
    chart: {
      locales: [
        {
          name: "en",
          options: {
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            shortMonths: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            days: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
        },
        {
          name: "fr",
          options: {
            months: [
              "janvier",
              "février",
              "mars",
              "avril",
              "mai",
              "juin",
              "juillet",
              "août",
              "septembre",
              "octobre",
              "novembre",
              "décembre",
            ],
            shortMonths: [
              "janv.",
              "févr.",
              "mars",
              "avr.",
              "mai",
              "juin",
              "juill.",
              "août",
              "sept.",
              "oct.",
              "nov.",
              "déc.",
            ],
            days: [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi",
            ],
            shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
          },
        },
      ],
      defaultLocale: "en",
      sparkline: { enabled: false },
      offsetX: 0,
      zoom: { enabled: false },
      id: "chart",
      toolbar: { show: false },
      animations: { enabled: false, easing: "easeinout", speed: 1000 },
      stacked: false,
    },
    dataLabels: { enabled: false },
    xaxis: {
      show: true,
      labels: { show: true, style: { colors: "#525252", fontWeight: 600 } },
      axisBorder: { show: false },
      axisTicks: { show: false },
      type: "datetime",
      tooltip: { enabled: false },
    },
    yaxis: [
      {
        show: false,
        decimalsInFloat: false,
        labels: {
          show: true,
          style: {
            colors: "#525252",
            fontWeight: 600,
          },
        },
        title: { text: "Holdings" },
      },
      {
        show: true,
        decimalsInFloat: false,
        labels: {
          show: true,
          style: {
            colors: "#525252",
            fontWeight: 600,
          },
        },
        title: { text: "Rate" },
      },
      {
        opposite: true,
        title: {
          text: "Holdings value",
        },
        labels: {
          formatter: (val) => parseInt(val),
        },
      },
    ],
    tooltip: {
      enabled: true,
      followCursor: false,
      shared: true,
      theme: false,
      x: { show: false },
      y: {
        // FORMAT with percentage and currency
        formatter: (value) => formattedMoney(value, currency),
      },
    },
    stroke: { width: 2, curve: "smooth" },
    fill: {
      colors: ["#00F", "#0F0", "#F00"],
      type: "solid",
      gradient: { opacityFrom: 0.9, opacityTo: 1 },
    },
    grid: {
      borderColor: "rgba(82, 82, 82, 0.2)",
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    colors: ["#00F", "#0F0", "#F00"],
    markers: { strokeWidth: 2 },
    legend: { show: false },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: { sparkline: { enabled: false } },
          yaxis: { show: false, labels: { show: false } },
        },
      },
    ],
  }
}

const series = [
  {
    name: "Checking Accounts",
    data: [
      [1616103263756, 4002.4822768],
      [1616189697783, 4002.4822768],
      [1616276086258, 4002.4822768],
      [1616362450235, 4002.4822768],
      [1616448844358, 4002.4822768],
      [1616535244525, 4002.4822768],
      [1616621603050, 4002.4822768],
      [1616708038240, 4002.4822768],
      [1616794432124, 4002.4822768],
      [1616880868291, 4002.4822768],
      [1616967324660, 4002.4822768],
      [1617053778917, 4002.4822768],
      [1617140096184, 4002.4822768],
      [1617226456756, 4002.4822768],
      [1617313024114, 4002.4822768],
      [1617399549627, 4002.4822768],
      [1617485862388, 4002.4822768],
      [1617572046890, 4002.4822768],
      [1617658490929, 4002.4822768],
      [1617744874301, 4002.4822768],
      [1617831275625, 4002.4822768],
      [1617917693274, 4002.4822768],
      [1617927811596, 4002.4822768],
    ],
  },
  {
    name: "Crypto",
    data: [
      [1616103263756, 0],
      [1616189697783, 0],
      [1616276086258, 0],
      [1616362450235, 0],
      [1616448844358, 0],
      [1616535244525, 0],
      [1616621603050, 0],
      [1616708038240, 0],
      [1616794432124, 0],
      [1616880868291, 0],
      [1616967324660, 0],
      [1617053778917, 0],
      [1617140096184, 0],
      [1617226456756, 0],
      [1617313024114, 0],
      [1617399549627, 0],
      [1617485862388, 0],
      [1617572046890, 0],
      [1617658490929, 0],
      [1617744874301, 6786.283384944],
      [1617831275625, 6048.658767368],
      [1617917693274, 6173.158070632],
      [1617927811596, 6265.8290842],
    ],
  },
  {
    name: "Precious Metals",
    data: [
      [1616103263756, 0],
      [1616189697783, 0],
      [1616276086258, 0],
      [1616362450235, 0],
      [1616448844358, 0],
      [1616535244525, 0],
      [1616621603050, 0],
      [1616708038240, 0],
      [1616794432124, 0],
      [1616880868291, 0],
      [1616967324660, 0],
      [1617053778917, 0],
      [1617140096184, 0],
      [1617226456756, 0],
      [1617313024114, 0],
      [1617399549627, 0],
      [1617485862388, 0],
      [1617572046890, 0],
      [1617658490929, 0],
      [1617744874301, 79880.2312],
      [1617831275625, 80120.292],
      [1617917693274, 79835.64848],
      [1617927811596, 79835.64848],
    ],
  },
  {
    name: "Other Assets",
    data: [
      [1616103263756, 0],
      [1616189697783, 0],
      [1616276086258, 0],
      [1616362450235, 0],
      [1616448844358, 0],
      [1616535244525, 0],
      [1616621603050, 0],
      [1616708038240, 0],
      [1616794432124, 0],
      [1616880868291, 0],
      [1616967324660, 0],
      [1617053778917, 0],
      [1617140096184, 0],
      [1617226456756, 0],
      [1617313024114, 0],
      [1617399549627, 0],
      [1617485862388, 0],
      [1617572046890, 0],
      [1617658490929, 0],
      [1617744874301, 199999.99999999968],
      [1617831275625, 199999.99999999968],
      [1617917693274, 199999.99999999968],
      [1617927811596, 199999.99999999968],
    ],
  },
  {
    name: "Real Estate",
    data: [
      [1616103263756, 229393.9799331105],
      [1616189697783, 229393.9799331105],
      [1616276086258, 229393.9799331105],
      [1616362450235, 229393.9799331105],
      [1616448844358, 229393.9799331105],
      [1616535244525, 229393.9799331105],
      [1616621603050, 229393.9799331105],
      [1616708038240, 229393.9799331105],
      [1616794432124, 229393.9799331105],
      [1616880868291, 229393.9799331105],
      [1616967324660, 229393.9799331105],
      [1617053778917, 229393.9799331105],
      [1617140096184, 229393.9799331105],
      [1617226456756, 229393.9799331105],
      [1617313024114, 229393.9799331105],
      [1617399549627, 229393.9799331105],
      [1617485862388, 229393.9799331105],
      [1617572046890, 229393.9799331105],
      [1617658490929, 229393.9799331105],
      [1617744874301, 819999.9999999991],
      [1617831275625, 819999.9999999991],
      [1617917693274, 819999.9999999991],
      [1617927811596, 819999.9999999991],
    ],
  },
]

const donutChartOptions = (labels, currency) => {
  return {
    chart: { zoom: { enabled: false }, id: "basic-donut" },
    labels,
    legend: {
      show: true,
      // showForNullSeries: false,
      // showForZeroSeries: false,
      position: "bottom",
      floating: false,
      offsetY: 0,
      fontSize: "14px",
      labels: { colors: ["#000"] },
      markers: { radius: 2, offsetX: 10, offsetY: 10 },
      itemMargin: { horizontal: 0, vertical: 4 },
      onItemHover: { highlightDataSeries: true },
    },
    colors: [
      "#3A84DE",
      "#4040B5",
      "#DEAB5E",
      "#B54053",
      "#E88079",
      "#77CFAC",
      "#228C83",
      "#EDE1D4",
      "#C36B55",
      "#59BDC5",
      "#EED7B4",
    ],
    tooltip: { enabled: false },
    stroke: { show: true, colors: ["#292929"] },
    dataLabels: { enabled: true },
    plotOptions: {
      pie: {
        customScale: 1,
        offsetY: 10,
        offsetX: -10,
        expandOnClick: true,
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "12px",
              fontWeight: 600,
              color: "#000",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "14px",
              fontWeight: 600,
              showAlways: true,
              color: "#A5A5A5",
              formatter: (val) => formattedMoney(val, currency),
            },
            total: {
              show: false,
              fontSize: "16px",
              fontWeight: 600,
              color: "#000",
              showAlways: false,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          plotOptions: {
            pie: {
              customScale: 1.2,
              // offsetX: -20,
              // offsetY: 50,
              donut: {
                size: "68%",
                labels: {
                  show: true,
                  name: { show: false },
                  value: {
                    show: true,
                    fontSize: "11px",
                    offsetY: 5,
                    color: "#A5A5A5",
                    formatter: (val) => formattedMoney(val, currency),
                  },
                },
              },
            },
          },
          legend: { show: true },
        },
      },
    ],
  }
}

export const apexChartTools = {
  chartOptions,
  donutChartOptions,
  series,
}
