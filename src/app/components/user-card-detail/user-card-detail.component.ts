import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

interface UserData {
  avatar_url?: string;
  name?: string;
  login?: string;
  company?: string;
  followers?: string;
  public_repos?: string;
}

@Component({
  selector: 'app-user-card-detail',
  templateUrl: './user-card-detail.component.html',
  styleUrls: ['./user-card-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UserCardDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: UserData;

  constructor() {}

  ngOnInit() {
    // console.log('user card detail data--', this.data);
  }

}
