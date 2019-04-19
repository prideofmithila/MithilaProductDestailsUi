import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMithilaPaintingComponent } from './know-mithila-painting.component';

describe('KnowMithilaPaintingComponent', () => {
  let component: KnowMithilaPaintingComponent;
  let fixture: ComponentFixture<KnowMithilaPaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMithilaPaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMithilaPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
