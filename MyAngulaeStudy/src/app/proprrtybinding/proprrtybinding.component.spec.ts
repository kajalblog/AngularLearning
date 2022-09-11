import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprrtybindingComponent } from './proprrtybinding.component';

describe('ProprrtybindingComponent', () => {
  let component: ProprrtybindingComponent;
  let fixture: ComponentFixture<ProprrtybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprrtybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprrtybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
