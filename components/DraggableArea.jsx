import React from "react";
import { View, Alert } from "react-native";
import Draggable from 'react-native-draggable';

const DraggableArea = ({
    setIsCanInserted
}) => {

  const areaHeight = 300; // Alto del área
  
  const handleDragRelease = (event, gestureState) => {


  
    // Calcular la posición final del elemento arrastrable
    const finalY = gestureState.moveY;

    // Verificar si la posición final está dentro del área deseada
    if (finalY <= areaHeight) {
      Alert.alert("¡Felicidades!", "Has soltado el elemento en el área deseada");
        setIsCanInserted(true);

    }
  };

  return (
    <View style={{ marginHorizontal:20 }}>
        <View style={{ flex: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}>
        
        </View>
        <View style={{ width: "100%", height: "66.2%", backgroundColor: "green", borderWidth: 1, borderColor: "black", position: "relative" }}>
        <Draggable
          x={50}
          y={300}
          renderSize={130}
          imageSource={require('../assets/images/cans/can_mint.png')}
          onDragRelease={handleDragRelease}
        />
      </View>
    </View>
  );
};

export default DraggableArea;
