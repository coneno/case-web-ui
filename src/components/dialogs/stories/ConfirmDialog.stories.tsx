import React from "react";
import ConfirmDialog from '../ConfirmDialog';

import 'localStyles';

export default {
  title: "Dialogs/Confirm dialog"
};


const Template = (args) => (
  <ConfirmDialog {...args} />
);


export const Example = Template.bind({});
Example.args = {
  open: true,
  title: 'Confirm?',
  color: 'warning',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  onConfirm: () => { },
  onClose: () => { },
  children: <p>this is an info here</p>
}


export const WithCustomPadding = Template.bind({});
WithCustomPadding.args = {
  open: true,
  title: 'Confirm?',
  color: 'warning',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  onConfirm: () => { },
  onClose: () => { },
  children: <p>this is an info here</p>,
  dialogPaddingXClass: 'px-2',
  dialogHeaderPaddingYClass: 'py-1',
  dialogBodyPaddingYClass: 'py-1a'
}

