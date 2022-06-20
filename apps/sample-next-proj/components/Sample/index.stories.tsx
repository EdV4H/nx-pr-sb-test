import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sample from '.';

const meta: ComponentMeta<typeof Sample> = {
  title: 'Sample',
  component: Sample,
};

export default meta;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Default = Template.bind({});
