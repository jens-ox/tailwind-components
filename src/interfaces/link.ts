export interface Link {
  title: string;
  link: string;
}

export interface LinkWithIcon extends Link {
  icon: string;
}

export interface LinkWithOptionalIcon extends Link {
  icon?: string;
}

export interface LinkWithIconAndDescription extends LinkWithIcon {
  description: string;
}
