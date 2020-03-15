import {Component, h, Prop} from '@stencil/core';


@Component({
  tag: 'woolies-btn',
  styleUrl: 'woolies-btn.scss',
  shadow: true
})
export class WooliesBtn {

  render() {
    return (
      <button class="btn">
        ADD TO CARD
      </button>
    );
  }
}
