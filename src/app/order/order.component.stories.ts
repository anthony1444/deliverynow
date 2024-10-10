import { Meta, StoryObj } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';

import { OrderComponent } from './order.component';

type ComponentWithCustomControls = OrderComponent & {};

const meta: Meta<ComponentWithCustomControls> = {
  // TODO: Make sure this title path is correct, uncomment tile, then remove this comment. OR remove both comment and title
  // title: 'Components/Order',
  component: OrderComponent,
  // decorators: [moduleMetadata({ imports: [] }), applicationConfig({ providers: [ importProvidersFrom() ]})],
  parameters: {
    docs: { description: { component: `Order` } },
    // layout: 'fullscreen',
  },
  argTypes: {
    /** === Input Mapping === */
    // input: { options: ['---', ...Object.values(YourEnum)], mapping: YourEnum & { '---': undefined }, control: { type: 'select' }}
    /** === Output Actions === */
    // inputChange: { action: 'inputChange', table: { disable: true } }
    /** === Control Hide === */
    // someControl: { table: { disable: true } }
    /** === Control Disable === */
    // someControl: { control: { disable: true } }
  },
  args: {},
};
export default meta;

export const Order: StoryObj<ComponentWithCustomControls> = {
  args: {}, // Overrides args from default
  render: (args): StoryFnAngularReturnType => ({ props: args }),
}
