import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from './utils';
import text from '@/text';

describe('text', () => {
  before(() => {
    // create the client environment
    createClientEnv();
    document.getElementById('container').innerHTML = `
      <div id="content">content</div>
      <div id="nav"></div>
    `;
  });

  after(() => {
    destroyClientEnv();
  });

  it('gets element text', () => {
    const content = document.getElementById('content');
    expect(text(content)).to.equal('content');
  });

  it('set element text', () => {
    const nav = document.getElementById('nav');
    expect(text(nav)).to.equal('');

    const result = text(nav, 'nav');
    expect(nav.textContent).to.equal('nav');
    expect(result === nav).to.equal(true);
  });
});
