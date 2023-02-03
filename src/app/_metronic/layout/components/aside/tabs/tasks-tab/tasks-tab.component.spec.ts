import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTabComponent } from './tasks-tab.component';

describe('TasksTabComponent', () => {
  let component: TasksTabComponent;
  let fixture: ComponentFixture<TasksTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
