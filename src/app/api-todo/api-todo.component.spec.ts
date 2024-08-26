import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTodoComponent } from './api-todo.component';

describe('ApiTodoComponent', () => {
  let component: ApiTodoComponent;
  let fixture: ComponentFixture<ApiTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
