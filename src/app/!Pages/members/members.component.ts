import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  
  http = inject(HttpClient);
  data: any[] = []
  action = 'list';
  entity = {
    fullname: '',
    address: '',
    phone: '',
  };
 
  ngOnInit(): void {
    this.refresh();

  }
  refresh() {
    this.http.get('http://localhost:5049/members/list').subscribe(res => {
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
      this.http.post('http://localhost:5049/members/add', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
    if (this.action == 'edit') {
      this.http.post('http://localhost:5049/members/update', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
    // if (this.action == 'remove') {
    //   this.http.post('http://localhost:5049/members/remove/{memberID}',this.entity).subscribe(res => {
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
    // this.data.find.
  }

}


