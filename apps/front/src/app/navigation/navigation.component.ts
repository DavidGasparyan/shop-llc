import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-llc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    '../../assets/shared/components/list.scss',
    './navigation.component.scss',
  ],
})
export class NavigationComponent implements OnInit {
  arr: string[] = [
    'New',
    'Woman',
    'Men',
    'Kids',
    'Departments',
    'Brands',
    'Sale',
    'Clothing',
  ];


  constructor() {}

  ngOnInit(): void {}
}
