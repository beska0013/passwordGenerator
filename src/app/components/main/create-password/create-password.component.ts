import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})


export class CreatePasswordComponent implements OnInit {


  constructor() {}
  isCopy:boolean = false;
  isValid:boolean = false;
  active:boolean = false;

  input: string | undefined;

  reg1A: RegExp = /^[a-zA-Z]{1,12}$/;
  reg1B: RegExp = /^[!@#$%^&*]{1,12}$/;
  reg2: RegExp = /^(?=.*[0-9]{1,12})[a-zA-Z0-9]{2,12}$/;
  reg3: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,12}$/;


  copy(){

    if (typeof this.input === "string" && this.input?.length >= 5) {
      navigator.clipboard.writeText(this.input).then(() => this.isCopy = true);
    }
    else this.isValid = true
  }

  fillFunc(el:any){
    let res = 0;
    const percent: number = 20
    let length: number = (<string>this.input)?.length;
    res = percent * (length - 1)
    if(res >= 100) {
      this.active = true;
      res = 100
    }
    else  this.active = false;
    el.style.width = `${res}` + "%";
  }

  change(){
    this.isValid = false;
    this.isCopy = false;
    const easyBar = document.getElementById('easy');
    const normalBar = document.getElementById('normal');
    const strongBar = document.getElementById('strong');
    if(this.input === ''){
      easyBar? easyBar.style.width ='0':null;
      normalBar? normalBar.style.width ='0':null;
      strongBar? strongBar.style.width ='0':null;
    }
    if(this.reg1A.test(<string>this.input)) {
      normalBar? normalBar.style.width ='0':null;
      this.fillFunc(easyBar)
    }
    if(this.reg2.test(<string>this.input)) {
     easyBar? easyBar.style.width ='100%':null;
     this.fillFunc(normalBar)
    }
    if(this.reg3.test(<string>this.input)){
      easyBar? easyBar.style.width ='100%':null;
      normalBar? normalBar.style.width ='100%':null;
      this.fillFunc(strongBar)
    }
    else strongBar? strongBar.style.width ='0':null;
  }



  ngOnInit(): void {


  }

}
