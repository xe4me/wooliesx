import {Component, Element, h, Prop} from '@stencil/core';


export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  tag: 'woolies-typography',
  styleUrl: 'woolies-typography.scss',
  shadow: true
})
export class WooliesTypography {
  @Prop() variant: TypographyVariant = 'h1';
  @Element() host: HTMLDivElement;
  render() {
    const El = this.variant;
    return <El><slot/></El>
  }
}
