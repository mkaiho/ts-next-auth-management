import type { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

const meta: Meta<typeof Home> = {
  title: "Example/Home",
  component: Home,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
