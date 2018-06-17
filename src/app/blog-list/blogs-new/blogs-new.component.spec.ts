import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogsNewComponent } from './blogs-new.component';

describe('BlogsNewComponent', () => {
  let component: BlogsNewComponent;
  let fixture: ComponentFixture<BlogsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
