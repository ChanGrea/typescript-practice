import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Greetings from './components/Greetings';

ReactDOM.render(
  <>
    <Counter name="React" />
    <Greetings
      name="chanyoung"
      onClick={(name: string) => console.log(`${name} says Hello`)}
    />
  </>,
  document.getElementById('app')
);
