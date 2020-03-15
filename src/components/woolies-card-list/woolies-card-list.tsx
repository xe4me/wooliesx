import {Component, h, Listen, Prop} from '@stencil/core';
import {ICard} from '../woolies-card/woolies-card';

@Component({
  tag: 'woolies-card-list',
  styleUrl: 'woolies-card-list.scss',
  shadow: true
})
export class WooliesCardList {

  @Prop() special: boolean;
  @Prop() title: string;
  @Prop() cards: ICard[];

  @Listen('addToCard')
  onClickHandler($event: CustomEvent<ICard>) {
    alert(JSON.stringify($event.detail))
  }

  render() {
    const classes = `card-list ${this.special ? 'card-list-special' : ''}`;
    return (
      <div class={classes}>
          {this.cards.map(card => <woolies-card key={card.id} class="card-list__card" card={card}/>)}
      </div>
    );
  }
}
