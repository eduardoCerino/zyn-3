import React from "react";
import { View } from "react-native";
import Draggable from 'react-native-draggable';

const DraggableItem = ({
  imageSize = 130,
  flavor = 'mint',
}) => {
  
  return (
    <View>
      {flavor === 'mint' && <Draggable x={200} y={300} imageSource={require('../assets/images/cans/can_mint.png')} renderSize={imageSize} />}
      {flavor === 'citrus' && <Draggable x={200} y={300} imageSource={require('../assets/images/cans/can_citrus.png')} renderSize={imageSize} />}
      {flavor === 'cherry' && <Draggable x={200} y={300} imageSource={require('../assets/images/cans/can_cherry.png')} renderSize={imageSize} />}
    </View>
  );
};

export default DraggableItem;
