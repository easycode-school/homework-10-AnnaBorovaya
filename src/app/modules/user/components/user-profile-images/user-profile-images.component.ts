import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Images } from '../../interfaces/images';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  @Input() id: string;
  public images: Images;
  constructor(
    private userService: UserService
  ) { }
  /**
   * ngOnInit - вызов метода на получение от сервера данных об изображениях
   * заись в перменную images полученных данных
   */
  ngOnInit() {
    this.userService.getUserImg(this.id).subscribe((images: Images) => {
      this.images = images;
    });
  }
}
