import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from './utils';
import removeChild from '@/removeChild';

describe('removeChild', () => {
  before(() => {
    // create the client environment
    createClientEnv();
    
  });

  after(() => {
    destroyClientEnv();
  });

  it('remove the specified node', () => {
    const container = document.getElementById('container');
    container.innerHTML = `
      <ul>
        <li class="name">name</li>
      </ul>
    `;
    const ul = container.querySelector('ul');
    const li = container.querySelector('li');

    removeChild(ul, li);
    expect(container.querySelector('li')).to.equal(null);
    container.innerHTML = '';
  });

  it('remove all child node', () => {
    const container = document.getElementById('container');
    container.innerHTML = `
      <ul>
        <li class="name">name</li>
        <li class="age">age</li>
      </ul>
    `;
    const ul = container.querySelector('ul');
    removeChild(ul);
    expect(container.querySelectorAll('li').length).to.equal(0);
  });
});
