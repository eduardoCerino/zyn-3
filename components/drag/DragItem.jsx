import React, { ReactElement } from "react";
import {
  LayoutChangeEvent,
  PanResponderGestureState,
  View,
  ViewStyle,
} from "react-native";
import Container, {
  ContainerProps,
  ContainerState,
  LayoutProps,
} from "./Container";
import Draggable from "./Draggable";


class DragItem extends Container {
  state = {
    layout: null,
    mounted: false,
  };
  ref = React.createRef();
  render() {
    const {
      onDrag,
      onDragEnd,
      item,
      renderItem,
      onGrant,
      addedHeight,
      itemsInZoneStyle,
      draggedElementStyle,
    } = this.props;
    const child = renderItem(item);
    const newChild = React.cloneElement(child, {
      style: {},
      ref: this.ref,
      onLayout: (e) => this.onSetLayout(e),
    });
    return (
      <Draggable
        layout={this.state.layout}
        onDrag={onDrag}
        onGrant={onGrant}
        draggedElementStyle={draggedElementStyle}
        addedHeight={addedHeight}
        style={{
          ...child.props.style,
          ...itemsInZoneStyle,
        }}
        onDragEnd={() => onDragEnd(item)}
      >
        {newChild}
      </Draggable>
    );
  }
}

export default DragItem;