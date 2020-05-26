import EntryInterface from './entry'
import Button from '../button'
import { Component } from 'haunted/lib/component'

export default interface MenuInterface extends Component<HTMLElement> {
  entries?: Array<EntryInterface>;
  buttons?: Array<Button>;
}
