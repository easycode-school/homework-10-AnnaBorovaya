import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { AuthGlobalService } from '../../../../services/auth-global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: User;
  public activeUser: string;
  public activeTab = 'selfies';
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private auth: AuthGlobalService
  ) {
    this.activeUser = this.auth.getUserId;
  }
  /**
   * ngOnInit - находим id
   * вызываем у сервиса запрос для получения данных о usere
   * и записываем полученные данные в нашу переменную user
   */
  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.userService.getUserInfo(id).subscribe((data: User) => {
      this.user = data;
    });
  }
}
