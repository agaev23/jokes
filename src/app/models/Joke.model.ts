export interface Joke {
  categories: string[];
  created_at: HTMLTableDataCellElement;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
  isFavorite?: boolean;
}
