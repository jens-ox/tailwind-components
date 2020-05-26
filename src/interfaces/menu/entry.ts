import { LinkWithIconAndDescription } from '../link'
import FooterInterface from './footer'
import { Component } from 'haunted/lib/component'

export default interface EntryInterface extends Component<HTMLElement> {
  active?: boolean;
  title: string;
  entries?: Array<LinkWithIconAndDescription>;
  footer?: FooterInterface;
  link?: string;
}
