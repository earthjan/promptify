export interface ListItemSelection {
  isSelected?: boolean;
}
export interface ListItemMouseEvent {
  onClick?: (itemId: string) => Promise<void> | void;
}
/**
 * Type for a list item
 */
export interface ListItem {
  id: string;
  icon?: JSX.Element;
  label: string;
}
