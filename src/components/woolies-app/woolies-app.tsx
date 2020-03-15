import {Component, h} from '@stencil/core';
import {ICard} from '../woolies-card/woolies-card';


@Component({
  tag: 'woolies-app',
  styleUrl: 'woolies-app.scss',
  shadow: true
})
export class WooliesApp {
  public cards: ICard[] = [
    {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://cdn0.woolworths.media/content/new-homepage/offertile-special-meat-b2c.jpg',
      price: '2.2 AUD',
      description: 'Lamb Leg Steak 270g, Beef & Pork Italian Style Sausages 500g',
      title: 'Meat',
    },
    {
      id: "5656g4jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/new-homepage/wk37-offertile-special-lent-all-groups.png',
      price: '1.3 AUD',
      description: 'Large Green Banana Prawns',
      title: 'Lent',
    },
    {
      id: "dfsdf34jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/new-homepage/offertile-special-fruit-veg-avocado-shepard.jpg',
      price: '43.2 AUD',
      description: 'Avocado Shepard',
      title: 'Avocado',
    }
  ];
  public specialCards: ICard[] = [
    {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/134034.jpg',
      price: '12.2 AUD',
      description: 'Lamb Leg Steak 270g, Beef & Pork Italian Style Sausages 500g',
      title: 'Fresh Tomator',
    },
    {
      id: "5656g4jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138801.jpg',
      price: '2.3 AUD',
      description: 'Seedless Grapes',
      title: 'Grapes',
    },
    {
      id: "dfsdf34jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/133211.jpg',
      price: '4.2 AUD',
      description: 'Cavendish Banana each',
      title: 'Banana',
    }
  ];

  render() {
    return (
      <div>
        <woolies-header>WooliesX</woolies-header>
        <main class="main">
          <woolies-typography class="main__title" variant="h1">Check out the latest from WooliesX</woolies-typography>
          <woolies-card-list cards={this.cards} class="main__list"/>
          <woolies-typography class="main__title" variant="h1">Explore this week’s specials</woolies-typography>
          <woolies-card-list cards={this.specialCards} special={true} class="main__list"/>
        </main>
        <footer>
          <br/><br/><br/><br/>
        </footer>
      </div>
    );
  }
}
