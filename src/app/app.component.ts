// import { Component, ViewEncapsulation } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  image: string;
  style: string;
  css: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'editor_client';
  hohoJotaro = '<img src="assets/images/fq1.png" class="fq1 blur">'
  hihi = '<img class="q1" src="assets/images/q1.png"><img class=" q2" src="assets/images/q2.png"><img class=" q3-q4" src="assets/images/q3-q4.png"><img class=" q1_tx1" src="assets/images/q1_tx1.png"><img class="q2_tx1" src="assets/images/q2_tx1.png"><img class="q3-q4_tx1" src="assets/images/q3-q4_tx1.png"><img class="q3-q4_tx2" src="assets/images/q3-q4_tx2.png">'
  // naRegua = '.q1 {  position: fixed;  width: 29.6vh;  height: auto;  top: 6.1vh;  right: 100.3vh;  animation: vertical-shaking-deku 0.33s infinite;}.q1_tx1 {  position: fixed;  width: 4.3vh;  height: auto;  top: 7vh;  right: 102.1vh;}.q2 {  position: fixed;  width: 28.8vh;  height: auto;  top: 6.5vh;  right: 69.9vh;  animation: vertical-shaking-todoroki 0.33s infinite;}.q2_tx1 {  position: fixed;  width: 12.4vh;  height: auto;  top: 6.5vh;  right: 86.6vh;}.q3-q4 {  position: fixed;  width: 60vh;  height: auto;  top: 71.1vh;  right: 69.7vh;  animation: vertical-shaking-quadro-3-4 1.7s infinite;}.q3-q4_tx1 {  position: fixed;  width: 26.4vh;  height: auto;  top: 72.6vh;  right: 100.7vh;}.q3-q4_tx2 {  position: fixed;  width: 5.2vh;  height: auto;  top: 79vh;  right: 73.1vh;}@keyframes vertical-shaking-deku {  40% { transform: translateY(0px) }  86% { transform: translate(2px, 6px) }  10% { transform: translateY(-10px) }  25% { transform: translateY(100px) }  25% { transform: translateX(-5px) }  0% { transform: translateY(-5px) }}@keyframes vertical-shaking-todoroki {  40% { transform: translateY(0px) }  83% { transform: translate(2px, -6px) }  10% { transform: translateY(-10px) }  25% { transform: translateY(100px) }  25% { transform: translateX(-5px) }  0% { transform: translateY(-5px) }}@keyframes vertical-shaking-quadro-3-4 {  60% { transform: translate(-7px, -4px) }  25% { transform: translateX(-2px) }  25% { transform: translateX(3px) }  0% { transform: translateY(-1px) }}'
  // naRegua = '.q1 {position: fixed;  width: 29.6vh;  height: auto;  top: 6.1vh;  right: 100.3vh;  animation: vertical-shaking-deku 0.33s infinite;}'
  tiles:  Tile[] = [
    {text: 'One', cols: 1, rows: 1, style: 'border-top: solid 0.3vh #D3D3D3; border-bottom: solid 0.3vh #D3D3D3; margin-top: 0.7vh;', image: '', css: ''},
    {text: 'Two', cols: 1, rows: 1, style: 'border:  solid 0.3vh #000; z-index: 1; margin-top: 0.7vh;', image: this.hihi, css: ''},
    {text: 'Three', cols: 1, rows: 1, style: 'border-top: solid 0.3vh #D3D3D3; border-bottom: solid 0.3vh #D3D3D3; margin-top: 0.7vh;', image: '<img src="assets/images/pqall.png" class="pqall">', css: ''}
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
