import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatrReferenceComponent } from './templatr-reference.component';

describe('TemplatrReferenceComponent', () => {
  let component: TemplatrReferenceComponent;
  let fixture: ComponentFixture<TemplatrReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatrReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatrReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
