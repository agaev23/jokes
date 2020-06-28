import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isMenuOver = false;
  isLoaded: boolean;
  isOpened: boolean;
  @ViewChild('matSidenav') sidenav: MatSidenav;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMenuOver = false;
          this.isOpened = true;
        } else {
          this.isMenuOver = true;
          this.isOpened = false;
        }
        this.isLoaded = true;
      });
  }

  close() {
    this.sidenav?.close();
  }

  open() {
    this.sidenav?.open();
  }

  onToggle() {
    this.isOpened = !this.isOpened;
  }
}
