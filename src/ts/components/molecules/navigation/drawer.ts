export interface DrawerItem {
  id: string;
  icon: JSX.Element;
  label: string;
  isSelected: boolean;
  onClick?: (itemId: string) => void;
}

export interface DrawerProps {
  items: DrawerItem[];
}
