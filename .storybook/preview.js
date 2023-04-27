import '../src/styles/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faXmark,
  faTrash,
  faBell,
  faPlus,
  faPaperPlane,
  faCircleCheck,
  faExclamation,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fas,
  faXmark,
  faTrash,
  faBell,
  faPlus,
  faPaperPlane,
  faCircleCheck,
  faExclamation,
  faSpinner
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
