import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TodoItem from '../TodoItem';

storiesOf('TodoItem', module)
  .add('not compolete', () => (
    <TodoItem text="Not complete" />
  ))
  .add('Complete', () => (
    <TodoItem text="Complete" complete />
  ))
