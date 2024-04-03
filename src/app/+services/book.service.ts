import { Injectable } from '@angular/core';
import { Book } from '../+models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books:Book[]=[
    {id:1001,title:'C#',writer:'احمد بخشی',publisher:'انتشارات نص',price:255000},
    {id:1002,title:'C++',writer:'الکساندر میترویچ',publisher:'قلم',price:150000},
    {id:1003,title:'Java Script پیشرفته',writer:'سارا کریمی',publisher:'انتشارات گاج',price:300000},
    {id:1004,title:'Angular',writer:'مکسی',publisher:'کانون زبان برنامه نویسی',price:455000},
  ];

  getBooks(){
    return this.books;
  }

  addBook(book:Book){
    this.books.push(book);
  }

}
