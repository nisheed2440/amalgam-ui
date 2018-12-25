import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

addDecorator(
  // Checkout out all the options below
  // https://github.com/storybooks/storybook/tree/master/addons/options#getting-started
  withOptions({
    name: 'Amalgam UI',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: true,
  }),
);

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(withNotes);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
