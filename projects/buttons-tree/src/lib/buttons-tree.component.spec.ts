import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTreeComponent } from './buttons-tree.component';

describe('ButtonsTreeComponent', () => {
  let component: ButtonsTreeComponent;
  let fixture: ComponentFixture<ButtonsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
