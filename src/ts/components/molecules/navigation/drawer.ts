import {
  ListItem,
  ListItemMouseEvent,
  ListItemSelection,
} from "../data-display/list";

export interface DrawerItem
  extends ListItem,
    ListItemSelection,
    ListItemMouseEvent {}
export interface DrawerProps {
  items: DrawerItem[];
}
