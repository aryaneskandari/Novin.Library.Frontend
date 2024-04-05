import { Injectable } from '@angular/core';
import { Member } from '../+models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private members:Member[]=[
    {id:1001,fullname:'سارا صادقی',phoneNumber:'09124351020',gender:'خانم',major:'کارشناسی',email:'sarasadeghi2024@gmail.com',address:'تهران'},
    {id:1002,fullname:'احمد کاظمیان',phoneNumber:'09331023040',gender:'آقا',major:'دیپلم',email:'ahmadkazemian@gmail.com',address:'یزد'},

  ]
  getMembers(){
    return this.members;
  }

  addMember(member:Member){
    this.members.push(member);
  }
}
