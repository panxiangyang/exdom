import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from './utils';
import addClassName from '@/addClassName';

describe('addClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('there are no fx class on element', () => {
    const container = document.getElementById('container');
    expect(container.className.indexOf('fx') === -1).to.equal(true);
    addClassName(container, 'fx');
    expect(container.className.indexOf('fx') !== -1).to.equal(true);
  });

  it('there are fx class on element', () => {
    const container = document.getElementById('container');
    const result = addClassName(container, 'fx');
    expect(result === container).to.equal(true);
  });
});
