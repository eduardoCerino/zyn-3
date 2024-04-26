import React from 'react'
import colors from '../constants/Colors';
import { Switch } from 'react-native';

const MySwitch = ({
    showBigReward,
    toggleReward
}) => {
  return (
    <>
        <Switch
          value={showBigReward}
          onValueChange={toggleReward}
          trackColor={{ false: colors.NEUTRAL_SOFT , true: colors.ZYN_DARK }} thumbColor={colors.ZYN_SOFT}
           />

    </>
  )
}

export default MySwitch