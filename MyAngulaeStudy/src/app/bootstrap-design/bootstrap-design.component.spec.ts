import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDesignComponent } from './bootstrap-design.component';

describe('BootstrapDesignComponent', () => {
  let component: BootstrapDesignComponent;
  let fixture: ComponentFixture<BootstrapDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
