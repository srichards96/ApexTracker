import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/models/UserData/UserData';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserData;
  loaded = false;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const platform = this.route.snapshot.paramMap.get('platform');
    const name = this.route.snapshot.paramMap.get('name');
    this.userService.getUser(platform, name)
      .subscribe(
        user => this.user = user.data,
        err => this.error = true
      ).add(
        () => this.loaded = true
      );
  }

}
