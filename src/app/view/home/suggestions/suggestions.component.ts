import {Component, OnInit} from '@angular/core';
import {SuggestionService} from '@src/app/service/suggestion.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "@src/environments/environment";
import {Suggestion} from "@src/app/model/Suggestion";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  message = '';
  priority = 'PRIORITY1';
  feeling = '🥰';
  ableToPreview = false;
  rows: Suggestion[] = [];
  row = null;

  constructor(private suggestionService: SuggestionService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (userId === environment.OwnerId) {
      this.ableToPreview = true;
    }
    this.suggestionService.getAllSuggestions().subscribe(value => {
      this.rows = value;
      console.log(this.rows);
    });
  }

  setEmoji(event: any): void {
    if (event.value === 5) {
      this.feeling = '🥰';
    } else if (event.value === 4) {
      this.feeling = '🤗';
    } else if (event.value === 3) {
      this.feeling = '😃';
    } else if (event.value === 2) {
      this.feeling = '😐';
    } else if (event.value === 1) {
      this.feeling = '😒';
    } else if (event.value === 0) {
      this.feeling = '😡';
    }
  }

  setPriority(priority: string): void {
    this.priority = priority;
  }

  saveSuggestion(): void {
    if (this.message !== '') {
      this.suggestionService.saveSuggestion(this.message, this.priority, this.feeling).subscribe(value => {
        this.snackBar.open('Thanks for your suggestion 😊 We\'ll consider it as soon as possible', 'Dismiss', {duration: 2000});
      }, error => {
        if (error.status === 400) {
          this.snackBar.open('Invalid details!', 'Dismiss', {
            duration: 2000
          });
        } else {
          this.snackBar.open('500 Something went wrong! Please try again in little bit later', 'Dismiss', {
            duration: 2000
          });
        }
      });
    } else {
      this.snackBar.open('Please Fill Your Suggestion', 'Dismiss', {
        duration: 2000
      });
    }
  }

  deleteRow(id: number): void {
  }
}
