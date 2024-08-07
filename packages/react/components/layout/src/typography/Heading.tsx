import * as React from "react";
import { HeadingProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@manon/themes";
import { headingStyle } from "./style.css";

const Heading = React.forwardRef(
  (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
    const { as = "h1", color = "gray", background, fontSize, children } = props;

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
          headingStyle({ fontSize }),
          props.className,
        ]),
        style: {
          color: color && vars.colors.$scale?.[color]?.[700],
          background: background && vars.colors.$scale?.[background]?.[100],
          ...props.style,
        },
      },
      children,
    );
  },
);

export { Heading };
