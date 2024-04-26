import React, { ReactElement } from "react";
import { PanResponderGestureState, View, ViewStyle } from "react-native";
import Container, {
  ContainerProps,
  ContainerState,
  Display,
  LayoutProps,
} from "./Container";
import DragZOne from "./DragZone";


class ZonesContainer extends Container{
  ref = React.createRef();
  render() {
    const {
      itemKeyExtractor,
      renderItem,
      zonesContainerStyle,
      onZoneLayoutChange,
      onDragEnd,
      zoneKeyExtractor,
      itemsInZoneStyle,
      onGrant,
      changed,
      onDrag,
      zones,
      renderZone,
      draggedElementStyle,
      addedHeight,
      itemsDisplay,
      numCollumns,
    } = this.props;
    return (
      <View style={zonesContainerStyle}>
        {zones.map((zone) => {
          const key = zoneKeyExtractor(zone);
          return (
            <DragZOne
              onZoneLayoutChange={onZoneLayoutChange}
              zoneId={key}
              key={key}
              renderItem={renderItem}
              addedHeight={addedHeight}
              itemsDisplay={itemsDisplay}
              numCollumns={numCollumns}
              changed={changed}
              onGrant={onGrant}
              onDragEnd={onDragEnd}
              draggedElementStyle={draggedElementStyle}
              zone={zone}
              itemsInZoneStyle={itemsInZoneStyle}
              itemKeyExtractor={itemKeyExtractor}
              onDrag={onDrag}
              renderZone={renderZone}
            />
          );
        })}
      </View>
    );
  }
}

export default ZonesContainer;