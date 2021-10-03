import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/model/user-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from 'src/app/model/post-model';
import { PostService } from 'src/app/services/post.service';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  private post: any[] = [];
  public name!: UserModel;
  private id?: string;
  private photo?: string[];
  private downloadURL?: any;
  private task?: AngularFireUploadTask;
  public postForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl(''),
  });
  constructor(
    private userService: UserService,
    private postService: PostService,
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.id = this.userService.getID();
    this.userService.profile(this.id).subscribe((data: UserModel[]) => {
      const { name }: any = data;
      this.name = name;
    });
  }

  public async createPost(): Promise<void> {
    let image: any = this.photo;
    const fileRef: any = this.storage.ref(`images/${image.name}`);
    this.task = fileRef.put(image);
    this.task
      ?.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            this.post = [
              {
                user: this.id,
                description: this.postForm.value.description,
                photo: url,
              },
            ];
            this.postService
              .createPost(this.post)
              .subscribe((data: PostModel[]) => {
                window.location.reload();
              });
          });
        })
      )
      .subscribe();
  }

  private async uploadImage(path: string, image: any): Promise<any> {
    const fileRef: any = this.storage.ref(`${path}/${image.name}`);
    this.task = fileRef.put(image);
    this.task
      ?.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            console.log(url);
            return url;
            // this.post = [
            //   {
            //     user: this.name,
            //     description: this.postForm.value.description,
            //     photo: url,
            //   },
            // ];
          });
        })
      )
      .subscribe((url: any) => {
        // console.log(url);
      });
  }

  //Resize input post
  reSizeStatus(event: any) {
    const textarea: any = document.querySelector('.textarea_post');
    textarea.style.height = '63px';
    let scHeight = event.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  }

  //Upload Image preview
  defaultBtnActive() {
    let defaultBtn = document.getElementById('default-btn') as HTMLInputElement;
    defaultBtn.click();
    this.onSelectFile(defaultBtn);
  }

  onSelectFile(e: any) {
    const wrapper: any = document.querySelector('.wrapper_up_image');
    const fileName: any = document.querySelector('.file-name');
    const cancelBtn: any = document.querySelector('#cancel_up_image svg');
    const img: any = document.querySelector('.image_preview');
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    e.addEventListener('change', () => {
      const file = e.files[0];
      this.photo = file;
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          const result = reader.result;
          //console.log(result)
          img.src = result;
          wrapper.classList.add('active');
        };
        cancelBtn.addEventListener('click', function () {
          img.src = '';
          wrapper.classList.remove('active');
        });
        reader.readAsDataURL(file);
      }
      if (e.value) {
        let valueStore = e.value.match(regExp);
        fileName.textContent = valueStore;
      }
    });
  }
}
