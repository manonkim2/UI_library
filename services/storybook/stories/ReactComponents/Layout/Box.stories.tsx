import "@manon/react-components-layout/style.css";
import { Box as _Box } from "@manon/react-components-layout";

export default {
  title: "React Component - Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: 5,
    background: "blue",
  },
};
