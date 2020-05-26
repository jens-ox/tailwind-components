import { Link, LinkWithOptionalIcon } from '../link'

export default interface FooterInterface {
  title: string;
  link?: Link;
  entries: Array<LinkWithOptionalIcon>;
}
