import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  pageMeta = {
    title: 'Git User Profile Viewer',
    description: 'Search for a git user and hit enter.'
  };
  userInput: string;
  errorMsg: string;
  users = [];
  loading = false;

  constructor( private userService: UserService) { }

  ngOnInit() {
  }

  // search user by name
  searchUserByName() {
    // show loader
    this.showLoader();
    this.userService.getUserByName(this.userInput).subscribe(
      response => {
        // set data
        const data = JSON.parse(JSON.stringify(response));
        // console.log('response from api--', data);
        // push user data to users array
        this.users.push(data);
        // hide loader
        this.hideLoader();
      },
      error => {
        // error on api
        // console.error('error from api--', error);
        // set error message
        this.errorMsg = error.error.message;
        // hide loader
        this.hideLoader();
      }
    );
  }

  // show loading
  showLoader() {
    this.loading = true;
  }

  // hide loading
  hideLoader() {
    this.loading = false;
  }

}
