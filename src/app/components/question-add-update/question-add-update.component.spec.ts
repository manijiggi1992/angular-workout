import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddUpdateComponent } from './question-add-update.component';

describe('QuestionAddUpdateComponent', () => {
  let component: QuestionAddUpdateComponent;
  let fixture: ComponentFixture<QuestionAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
