import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [dataPie, setDataPie] = React.useState({
    tooltip: {
      show: false,
    },
    legend: {
      left: 'center',
      // orient: 'vertical',
      bottom: 0,
      data: ['Category A', 'Category B'],
    },
    series: [
      {
        name: 'My Data',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 56, name: 'Category A' },
          { value: 83, name: 'Category B' }
        ]
      },
    ],
  });

  return (
    <Context.Provider value={{ dataPie, setDataPie }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
