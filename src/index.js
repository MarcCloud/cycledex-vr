import {periodic} from 'most';
import {run} from '@cycle/most-run';
import {makeDOMDriver, h1} from '@cycle/dom';

function main() {
  const sinks = {
    DOM: periodic(1000, 1).scan((x, y)=> x + y, 0).map(i =>
      h1('' + i + ' seconds elapsed')
    )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#root')
};

run(main, drivers);
