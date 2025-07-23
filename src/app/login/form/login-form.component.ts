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
  selector: 'login-form',
  templateUrl: './login-form.template.html',
  styleUrl: './login-form.style.scss',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
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
      .login({ username: this.username, password: this.password })
      .subscribe((data) => {
        console.log("🚀 ~ LoginFormComponent ~ .subscribe ~ data:", data)
        if (data.token) {
          this.storage.set('token', data.token);
          this.router.navigate(['/products'])
        }
      });
  }
}
