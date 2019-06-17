import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagePostComponent } from './edit-manage-post.component';

describe('EditManagePostComponent', () => {
  let component: EditManagePostComponent;
  let fixture: ComponentFixture<EditManagePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
