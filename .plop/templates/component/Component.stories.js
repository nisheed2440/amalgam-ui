import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Component from './Component.component';

storiesOf('Component', module)
  .add('with default text', () => <Component />, {
    notes: 'Culpa ut pariatur ut incididunt eiusmod ullamco eu.',
  })
  .add('with custom text', () => <Component foo={text('foo', 'Hello World')} />);
