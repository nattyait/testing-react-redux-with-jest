import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import TodoItem from '../TodoItem';

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .addWithInfo('not compolete', 'An incomplete todo item', () => (
    <TodoItem text={text('Text', 'Not complete')} />
  ))
  .addWithInfo('Complete', 'A complete todo item', () => (
    <TodoItem
      text={text('Textt', 'Complete')}
      complete={boolean('Complete', true)}
    />
  ))
