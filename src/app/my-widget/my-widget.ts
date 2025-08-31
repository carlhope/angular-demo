import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-widget',
  imports: [CommonModule],
  templateUrl: './my-widget.html',
  styleUrls: ['./my-widget.css']
})
export class MyWidget implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() config: { theme: string; showHeader: boolean } = { theme: 'light', showHeader: true };

  constructor() {
    console.log('Constructor: MyWidget instance created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties changed', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection run');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is about to be destroyed');
  }

  increment(): void {
    this.count++;
    console.log('Incremented count:', this.count);
  }

  decrement(): void {
    this.count--;
    console.log('Decremented count:', this.count);
  }
}



