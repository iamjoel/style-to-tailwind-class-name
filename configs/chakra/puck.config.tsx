import type { Config } from "@measured/puck";
import ButtonConfig, { ButtonProps } from "./block/base/button";
import ButtonGroupConfig, { ButtonGroupProps } from "./block/base/button-group";
import Input, { InputProps } from "./block/form/input";
// https://github.com/measuredco/puck/blob/main/apps/demo/app/configs/antd/root.tsx
type Props = {
  ButtonGroup: ButtonGroupProps,
  Button: ButtonProps;
  Input: InputProps;
};

export const config: Config<Props> = {
  root: {
    fields: {
      title: {
        type: "text",
      },
    },
    render: ({ children, title }) => (
      <div>
        <div>title:{title}</div>
        <div>{children}</div>
        <div>footer</div>
      </div>
    )
  },
  components: {
    Button: ButtonConfig,
    ButtonGroup: ButtonGroupConfig,
    Input: Input,
  },
};

export default config;
