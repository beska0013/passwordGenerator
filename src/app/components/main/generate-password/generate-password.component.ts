import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss']
})
export class GeneratePasswordComponent implements OnInit {
  num: number = 5;
  active:boolean = false;
  isCopy:boolean = false;
  valiue:string = '';

  alphaLower: string = "abcdefghijklmnopqrstuvwxyz";
  alphaUpper: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers: string = "0123456789";
  symbols: string = "!@#$%^&*_-+=";

  symbolValue:boolean = false;
  numberValue:boolean = false;
  upperValue: boolean = false;
  lowerValue: boolean = false;

  constructor() { }

  copyStr = () => this.valiue !='' ? navigator.clipboard.writeText(this.valiue).then(() => this.isCopy = true): null;

  increment = () => {if(this.num !== 12) this.num ++}
  decrement = () => { if(this.num !== 5) this.num --}

  symbolCheck = (e:any) => this.symbolValue =  e.target.checked;
  numberCheck = (e:any) => this.numberValue = e.target.checked;
  upperCheck  = (e:any) => this.upperValue = e.target.checked;
  lowerCheck  = (e:any) => this.lowerValue = e.target.checked;

checkDifficulty(){
  this.isCopy = false;
  let char = '';
  this.upperValue  ? char += this.alphaUpper : '';
  this.lowerValue  ? char += this.alphaLower : '';
  this.numberValue ? char += this.numbers : '';
  this.symbolValue ? char += this.symbols : '';
  this.valiue = this.generatePass(this.num,char);
  this.valiue !='' ? this.active = true : this.active = false;
  this.valiue !='' ? this.fadeInFunc() : null;
}

generatePass(length:number,char:string) {
  let password = '';
  for (let i = 0; i < length; i++)  password += char.charAt(Math.floor(Math.random() * char.length));
  return password;
}

 fadeInFunc(){
   const fadeInElement = document.getElementById('passResult');
   // @ts-ignore
   fadeInElement.innerHTML = this.valiue
   fadeInElement?.textContent? fadeInElement.innerHTML = fadeInElement.textContent.replace(
     /\S/g,`<span class="let">$&</span>`
   ):null;
   const letters = document.querySelectorAll('.let')
   letters.forEach( (l:any) => {
    let num1 = Math. floor(Math. random()*(300 - (-300 )+ 1) + (-300))
    let num2 = Math. floor(Math. random()*(300 - (-300 )+ 1) + (-300))
     l.style.transform = `translate(${num1 + 'px'},${num2 + 'px'}) rotate(180deg) scale(.5)`;
           setTimeout(()=>{
             l.classList.add('appear')
           },1000)
   })

 }

  ngOnInit(): void {

  }
}


