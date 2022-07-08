import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { communityService } from "@src/app/service/community.service";

@Component({
  selector: 'app-menu',
  templateUrl: './searchCommunityContent.component.html',
  styleUrls: ['./searchCommunityContent.component.scss']
})
export class searchCommunityContentComponent {
  communities = "";
  emojis = ['😃', '😍', '😴', '😎', '😡', '🥶', '😞', '🤔', '😶'];

  constructor(private communityService: communityService, private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.communityService.getAllCommunities().subscribe(communities => {
      this.communities = communities;
      console.log(this.communities)
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', { duration: 2000 });
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', { duration: 2000 });
      }
    });
  }

  addEmoji(emoji: any): void {
    console.log(emoji);
  }
}