import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VervideoComponent } from './vervideo.component';

describe('VervideoComponent', () => {
  let component: VervideoComponent;
  let fixture: ComponentFixture<VervideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VervideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VervideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
