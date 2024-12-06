import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNodeComponent } from './button-node.component';

describe('ButtonNodeComponent', () => {
  let component: ButtonNodeComponent;
  let fixture: ComponentFixture<ButtonNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
