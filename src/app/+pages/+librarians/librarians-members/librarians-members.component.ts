import { Component, OnInit, inject } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Member } from '../../../+models/member';
import { MemberService } from '../../../+services/member.service';
import { MemberDetailsComponent } from './member-details/member-details.component';




@Component({
  selector: 'app-librarians-members',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MemberDetailsComponent,



  ],
  templateUrl: './librarians-members.component.html',
  styleUrl: './librarians-members.component.scss'
})
export class LibrariansMembersComponent implements OnInit{

  currentAction='list';

  data:Member[]=[];
  memberService=inject(MemberService);

  ngOnInit(): void {
    this.data=this.memberService.getMembers();
  }
  cancelClick() {
    this.currentAction='list';
  }
  addMember() {
    this.currentAction='add';
  }
  okClick(member:Member) {
    this.memberService.addMember(member);
    this.data=this.memberService.getMembers();
    this.currentAction='list';
  }



  displayedColumns: string[] = [ 'fullname', 'phoneNumber','gender', 'major','email','address'];

}
