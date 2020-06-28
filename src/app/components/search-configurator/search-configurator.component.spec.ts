import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConfiguratorComponent } from './search-configurator.component';

describe('SearchConfiguratorComponent', () => {
  let component: SearchConfiguratorComponent;
  let fixture: ComponentFixture<SearchConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
