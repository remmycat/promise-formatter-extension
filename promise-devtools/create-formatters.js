const nullStyle = {style: 'color: #777'};

import BluebirdPromise from 'bluebird'

export default function createFormatter() {

  const reference = (object, config) => {
    if (typeof object === 'undefined')
      return ['span', nullStyle, 'undefined'];
    else if (object === 'null')
      return ['span', nullStyle, 'null'];

    return ['object', {object, config}];
  };

  const BluebirdPromiseFormatter = {
    header(o) {
      if (!(o.then && o.isFulfilled && o.isRejected && o.isCancelled && o.isPending && o.value && o.reason)) {
        return null;
      }

      const first = !(o.isFulfilled() && o.value() && o.value().__formatterNotFirstTime === true);
      const original = first ? o : o.value().original;

      let status = 'Pending…';
      let color = '#777';
      if (original.isFulfilled()) {
        status = 'Resolved';
        color= '#171';
      } else if(original.isRejected()) {
        status = 'Rejected';
        color = '#d11';
      } else if (original.isCancelled()) {
        status = 'Cancelled';
        color = '#d11';
      }

      return [
        'span',
        ['span', {style: 'color: #3c669a'}, (first ? 'Bluebird Promise: ' : '')],
        ['span', {style: `color: ${color}`}, status, ' '],
        ...(original.isPending() ? [] : [reference(original.isRejected() ? original.reason() : original.value())]),
      ];
    },
    hasBody(o) {
      const original = o.isFulfilled() && o.value() && o.value().__formatterNotFirstTime === true ? o.value().original : o;
      return original.isPending();
    },
    body(o) {
      const first = !(o.isFulfilled() && o.value() && o.value().__formatterNotFirstTime === true);
      const original = first ? o : o.value().original;
      return ['span', (first ? '  ' : ''),['span', reference(BluebirdPromise.resolve({__formatterNotFirstTime: true, original}))]];
    }
  }

  return {
    BluebirdPromiseFormatter
  }
}
