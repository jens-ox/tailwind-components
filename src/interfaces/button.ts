import { Link } from './link'

enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export default interface Button extends Link {
  type: ButtonType;
}
