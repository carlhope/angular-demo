import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWidget } from './my-widget';

describe('MyWidget', () => {
  let component: MyWidget;
  let fixture: ComponentFixture<MyWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWidget]
    }).compileComponents();

    fixture = TestBed.createComponent(MyWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count', () => {
    component.count = 0;
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement count', () => {
    component.count = 5;
    component.decrement();
    expect(component.count).toBe(4);
  });
});

