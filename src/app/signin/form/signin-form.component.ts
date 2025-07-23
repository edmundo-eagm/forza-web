import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/user/application/service/user.service';
import { BrowserStorageService } from '../../../shared/storage/application/service/storage.service';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.template.html',
  styleUrl: './signin-form.style.scss',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninFormComponent {
  username: string = '';
  password: string = '';
  hide: boolean = true;

  constructor(
    private router: Router,
    public userService: UserService,
    private storage: BrowserStorageService,
  ) { }
  save() {
    this.userService
      .signin({ username: this.username, password: this.password })
      .subscribe((data) => {
        this.storage.set('token', data.token);
        this.router.navigate(['/products'])
      });
  }
}
