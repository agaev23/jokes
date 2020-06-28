import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { SearchSetting, SearchOptions } from 'src/app/models/SearchSetting.model';

@Component({
  selector: 'app-search-configurator',
  templateUrl: './search-configurator.component.html',
  styleUrls: ['./search-configurator.component.scss']
})
export class SearchConfiguratorComponent implements OnInit {

  @Input() loading = false;
  @Output() searchOption = new EventEmitter<SearchSetting>();

  SearchOptions = SearchOptions;
  form: FormGroup;
  categories: string[];

  get optionControl() {
    return this.form.get('option');
  }

  get categoryControl() {
    return this.form.get('category');
  }

  get searchTermControl() {
    return this.form.get('searchTerm');
  }

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    ) {
      this.buildForm();
    }

  ngOnInit() {
    this.dataService.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
      this.optionControl.valueChanges.subscribe(() => {
        this.categoryControl.patchValue(null);
        this.searchTermControl.patchValue(null);
      });
    });
  }

  onSubmit() {
    const options = this.form.value as SearchSetting;
    this.searchOption.emit(options)
  }

  setCategory(category: string) {
    this.categoryControl.patchValue(category);
  }

  isFormValid(): boolean {
    return this.optionControl.value === SearchOptions.Random
    || this.optionControl.value === SearchOptions.Categories && this.categoryControl.value
    || this.optionControl.value === SearchOptions.Search && this.searchTermControl.value;
  }

  private buildForm() {
    this.form = this.fb.group({
        option: new FormControl(SearchOptions.Random),
        category: new FormControl(null),
        searchTerm: new FormControl(null),
    });
  }
}
