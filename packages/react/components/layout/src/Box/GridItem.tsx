import * as React from "react";
import { clsx } from "clsx";
import { vars } from "@manon/themes";

import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { GridItemProps } from "./types";
import { extractSprinkleProps } from "../utils/properties";

const GridItem = React.forwardRef(
  (props: GridItemProps, ref: React.Ref<HTMLElement>) => {
    const {
      as = "div",
      color,
      background,
      area,
      colEnd,
      colStart,
      colSpan,
      rowEnd,
      rowStart,
      rowSpan,
      children,
    } = props;

    return React.createElement(
      as,
      {
        ...props,
        ref,
        className: clsx([
          BaseStyle,
          StyleSprinkles(
            extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
          ),
          props.className,
        ]),
        style: {
          gridArea: area,
          gridColumnEnd: colEnd,
          gridColumnStart: colStart,
          gridColumn: colSpan,
          gridRowEnd: rowEnd,
          gridRowStart: rowStart,
          gridRow: rowSpan,
          color: color && vars.colors.$scale?.[color]?.[700],
          background: background && vars.colors.$scale?.[background]?.[100],
          ...props.style,
        },
      },
      children,
    );
  },
);

export { GridItem };
