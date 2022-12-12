// import { Component, ViewEncapsulation } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
  style: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'editor_client';
  hihi = '<img class="q1" src="assets/images/q1.png"><img class=" q2" src="assets/images/q2.png"><img class=" q3-q4" src="assets/images/q3-q4.png"><img class=" q1_tx1" src="assets/images/q1_tx1.png"><img class="q2_tx1" src="assets/images/q2_tx1.png"><img class="q3-q4_tx1" src="assets/images/q3-q4_tx1.png"><img class="q3-q4_tx2" src="assets/images/q3-q4_tx2.png">'

  tiles:  Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: '', style: 'border-top: solid 0.3vh #D3D3D3; border-bottom: solid 0.3vh #D3D3D3; margin-top: 0.7vh;', image: ''},
    {text: 'Two', cols: 1, rows: 1, color: '', style: 'border:  solid 0.3vh #000; z-index: 1; margin-top: 0.7vh;', image: this.hihi},
    {text: 'Three', cols: 1, rows: 1, color: '', style: 'border-top: solid 0.3vh #D3D3D3; border-bottom: solid 0.3vh #D3D3D3; margin-top: 0.7vh;', image: ''}
  ];



  audioPath = 'assets/sounds/ysr.mp3';
  @ViewChild('audio')
  audio!: ElementRef;
  @ViewChild('options')
  text!: ElementRef;
  @ViewChild('button')
  btn!: ElementRef;

  ngAfterViewInit(): void {
    this.audio.nativeElement.play();
    this.text.nativeElement.innerHTML = `autoplay: ${
      this.audio.nativeElement.autoplay ? 'on' : 'off'
    } loop: ${this.audio.nativeElement.loop} muted: ${
      this.audio.nativeElement.muted
    }`;

    this.btn.nativeElement.click();
    this.audio.nativeElement.play();
  }

}
