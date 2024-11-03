import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule,DecimalPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  [x: string]: any;

  http = inject(HttpClient);
  data: any[] = []
  action = 'list';
  entity = {
    title: '',
    writer: '',
    price: 0,
  };
 
  ngOnInit(): void {
    this.refresh();

  }
  refresh() {
    this.http.get('http://localhost:5049/books/list').subscribe(res => {
      this.data = res as any[];
    });
  }
  
  add() {
    this.action = 'add';
  }
  cancel() {
    this.action = 'list';
  }
  ok() {
    if (this.action == 'add') {
      this.http.post('http://localhost:5049/books/add', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
    if (this.action == 'edit') {
      this.http.post('http://localhost:5049/books/update', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
    // if (this.action == 'remove') {
    //   this.http.post('http://localhost:5049/books/remove/{BookID}', this.entity.BookId).subscribe(res => {
    //     this.action = 'list';
    //     this.refresh();
    //   });
    // }


  }
  edit(item: any) {
    this.action = 'edit'
    this.entity = item;
  }
  remove() {
    this.action = 'remove'
    // this.data
  }

}
