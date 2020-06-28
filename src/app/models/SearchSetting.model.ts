export enum SearchOptions {
  Random = 'Random',
  Categories = 'Categories',
  Search = 'Search',
}

export interface SearchSetting {
  option: SearchOptions;
  category?: string;
  searchTerm?: string;
}
