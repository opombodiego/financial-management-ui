import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {
  public isMobile?: boolean;
  public openSidebar?: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 780px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
        this.openSidebar = !this.isMobile;
      }
    );
  }

  get toogle() {
    return this.openSidebar = !this.openSidebar;
  }

  get iconsMenu () {
    return !this.isMobile && !this.openSidebar;
  }

}
