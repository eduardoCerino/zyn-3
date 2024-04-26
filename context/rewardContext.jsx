import React, { useState, createContext } from "react";

const RewardContext = createContext({
  showBigReward: false,
  toggleReward: () => {},
  setShowBigReward: () => {},
});
  
  const RewardProvider = ({ children }) => {
    const [ showBigReward, setShowBigReward] = useState(false);

    const toggleReward = () => {
      setShowBigReward(  (prevReward) => !prevReward); 
    };
  
    return (
<     RewardContext.Provider value={{ toggleReward, showBigReward, setShowBigReward }}>
        {children}
      </RewardContext.Provider>
    );
  };
  
  export { RewardContext, RewardProvider };
  