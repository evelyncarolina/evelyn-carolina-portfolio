import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoUmComponent } from './projeto-um.component';

describe('ProjetoUmComponent', () => {
  let component: ProjetoUmComponent;
  let fixture: ComponentFixture<ProjetoUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
