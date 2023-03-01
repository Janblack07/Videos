import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearvideoComponent } from './crearvideo.component';

describe('CrearvideoComponent', () => {
  let component: CrearvideoComponent;
  let fixture: ComponentFixture<CrearvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearvideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
