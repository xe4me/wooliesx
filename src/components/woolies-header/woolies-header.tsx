import {Component, h} from '@stencil/core';


@Component({
  tag: 'woolies-header',
  styleUrl: 'woolies-header.scss',
  shadow: true
})
export class WooliesHeader {

  render() {
    return (
      <header class="header">
        <h1><slot/></h1>
      </header>
    );
  }
}
