import React from "react";
import BaseWidget, { IWidgetProps, IWidgetState } from "./BaseWidget";
import { WidgetType } from "../constants/WidgetConstants";
import TextComponent from "../editorComponents/TextComponent";

class TextWidget extends BaseWidget<TextWidgetProps, IWidgetState> {

  getPageView() {
    return (
      <TextComponent
        style={this.getPositionStyle()}
        widgetId={this.props.widgetId}
        key={this.props.widgetId}
        text={this.props.text}
        tagName={this.props.tagName}
      />
    );
  }

  getWidgetType(): WidgetType {
    return "TEXT_WIDGET";
  }
}

export interface TextWidgetProps extends IWidgetProps {
  text?: string;
  ellipsize?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
}

export default TextWidget;
