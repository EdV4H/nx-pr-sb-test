import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Ui } from './ui';

const meta: ComponentMeta<typeof Ui> = {
  title: 'lib/ui',
  component: Ui,
};

export default meta;

const Template: ComponentStory<typeof Ui> = (args) => <Ui {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
