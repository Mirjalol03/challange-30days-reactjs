import React from "react";

const MemoWorks = () => {
  console.log("MemoWorks render");
  
  return <div></div>;
};

// export default MemoWorks with using React.memo will prevent the component from re-rendering
export default React.memo(MemoWorks);
