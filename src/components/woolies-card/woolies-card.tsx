import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

export interface ICard {
  image: string
  id: string
  price: string
  description: string
  title: string
}

@Component({
  tag: 'woolies-card',
  styleUrl: 'woolies-card.scss',
  shadow: true
})
export class WooliesCard {
  @Prop() card: ICard;

  @Event() addToCard: EventEmitter<ICard>;

  public addHandler(card: ICard) {
    this.addToCard.emit(card);
  }

  render() {
    return (
      <div class="card">
        <div class="card__header">
          <woolies-typography variant="h2">{this.card?.title}</woolies-typography>
        </div>
        <div class="card__image">
          <img src={this.card?.image} alt="card image"/>
        </div>
        <div class="card__content">
          <div>
            {this.card?.description}
          </div>
          <woolies-btn class="card__action" onClick={() => this.addHandler(this.card)}>ADD TO CARD</woolies-btn>
        </div>
      </div>
    );
  }
}
