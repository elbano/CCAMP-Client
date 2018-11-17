import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  sectionList: Section[] = [new Section({ name: 'Discovery', page: '/discovery' }),
  new Section({ name: 'Channel', page: '/channel' }),
  new Section({ name: 'Campaign', page: '/dashboard', guid: '123456789' })];

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  public navigateTo(section): void {
    if (section.guid)
      this.router.navigate([section.page, section.guid]);
    else
      this.router.navigate([section.page]);
  }
}

export class Section {
  name: String;
  page: String;
  guid: String;

  constructor(options: any) {
    this.name = options.name;
    this.page = options.page;
    this.guid = options.guid;
  }
}
