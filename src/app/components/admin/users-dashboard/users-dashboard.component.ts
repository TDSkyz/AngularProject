import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  userToAdd: User = new User();
  userToEdit: User = new User();
  public users: User[] = [];
  public subscription: Subscription;
  public userIDParam: number;
  constructor(private userService: UserService,
  ) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.subscription = this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
      this.users.sort((a, b) => (a.user_id > b.user_id) ? 1 : -1);
    });
  }

  addUser() {
    this.subscription = this.userService.add(this.userToAdd).subscribe((message: Object) => {
      console.log(message);
      this.loadAllUsers();
    });

    this.userToAdd.setEmpty();
  }

  deleteUser(id: number) {
    var answer = window.confirm(`Delete User ID ${id} ??`)
    if (answer) {
      this.subscription = this.userService.delete(id).subscribe((message: Object) => {
        this.loadAllUsers();
      });
    }
  }

  passEditParams(user: User) {
    this.userToEdit.user_id = user.user_id;
    this.userToEdit.username = user.username;
  }

  editUser() {
    this.subscription = this.userService.update(this.userToEdit).subscribe((message: Object) => {
      console.log(message);
      this.loadAllUsers();
    });
  }

}
