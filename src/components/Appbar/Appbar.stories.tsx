import { Box, Container } from "@mui/material";
import { action } from "@storybook/addon-actions";

import Appbar from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Appbar> = {
  title: "Example/Appbar",
  component: Appbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Appbar>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Box>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </>
    ),
  ],
  args: {
    title: "MyApp",
    onOpenMenu: action("onOpenMenu"),
  },
};
