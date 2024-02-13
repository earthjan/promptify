import { ListItem, ListItemMouseEvent } from "../data-display/list";

export interface AppBarItem extends ListItemMouseEvent, ListItem {}

export interface AppBarProps {
  items: AppBarItem[];
}
