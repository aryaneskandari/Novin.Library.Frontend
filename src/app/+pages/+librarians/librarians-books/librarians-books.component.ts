import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../../+services/book.service';
import { Book } from '../../../+models/Book';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'app-librarians-books',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    BookDetailsComponent
  ],
  templateUrl: './librarians-books.component.html',
  styleUrl: './librarians-books.component.scss'
})
export class LibrariansBooksComponent implements OnInit {
  
addBook() {
  this.currentAction='add';
}
  currentAction='list';

  data:Book[]=[];

  ngOnInit(): void {
    this.data=this.bookService.getBooks();
  }
  bookService=inject(BookService);
  displayedColumns: string[] = ['id', 'title', 'writer', 'publisher','price'];
}
