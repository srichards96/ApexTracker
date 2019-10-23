import { Component, OnInit } from '@angular/core';
import { UserLookupData } from 'src/app/models/FormData/UserLookupData';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.css']
})
export class UserLookupComponent implements OnInit {
  readonly platforms: { value: string, text: string }[] = [
    { value: 'origin', text: 'Origin' },
    { value: 'psn', text: 'PlayStation 4' },
    { value: 'xbl', text: 'Xbox One' }
  ];

  model: UserLookupData = {
    name: '',
    platform: ''
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const { platform, name } = form.form.controls;
    this.router.navigate(['/', platform.value, name.value]);
  }
}
