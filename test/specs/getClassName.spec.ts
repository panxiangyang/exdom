import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from './utils';
import getClassName from '@/getClassName';

describe('getClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
    document.getElementById('container').innerHTML = `
      <div id="content"></div>
    `;
  });

  after(() => {
    destroyClientEnv();
  });

  it('there are class on element', () => {
    const classes = getClassName(document.getElementById('container'));
    expect(typeof classes === 'object').to.equal(true);
    expect(classes.join()).to.equal('container');
  });

  it('returns empty array when the className is empty', () => {
    const content = document.getElementById('content');
    expect(getClassName(content).length).to.equal(0);
  })
});
