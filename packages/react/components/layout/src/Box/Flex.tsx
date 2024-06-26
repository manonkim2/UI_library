import * as React from "react";
import { clsx } from "clsx";
import { vars } from "@manon/themes";

import { StyleSprinkles } from "../core/style.css";
import { FlexProps } from "./types";
import { extractSprinkleProps } from "../utils/properties";

const Flex = React.forwardRef(
  (props: FlexProps, ref: React.Ref<HTMLElement>) => {
    const {
      as = "div",
      color,
      background,
      align,
      basis,
      direction,
      grow,
      justify,
      shrink,
      wrap,
      gap,
      children,
    } = props;

    return React.createElement(
      as,
      {
        ...props,
        ref,
        className: clsx([
          StyleSprinkles(
            extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
          ),
          props.className,
        ]),
        style: {
          display: "flex",
          alignItems: align,
          justifyContent: justify,
          flexDirection: direction,
          flexWrap: wrap,
          flexGlow: grow,
          flexShrink: shrink,
          flexBasis: basis,
          gap,
          color: vars.colors.$scale?.[color]?.[700] ?? color,
          background: vars.colors.$scale?.[background]?.[100] ?? background,
          ...props.style,
        },
      },
      children,
    );
  },
);

export { Flex };
