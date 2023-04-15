import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [dataPie, setDataPie] = React.useState({
    data: {
      labels: [],
      datasets: [
        {
          label: "# of Votes",
          data: [],
          backgroundColor: [
            
          ],
          borderColor: [
            
          ],
          borderWidth: 1,
        },
      ],
    },
  });

  return (
    <Context.Provider value={{dataPie, setDataPie}}>{children}</Context.Provider>
  );
};

export { Context, Provider };