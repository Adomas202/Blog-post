import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';

describe('BlogListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListComponent]
    });
  })

  it('should create the list', () => {
    let fixture = TestBed.createComponent(BlogListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
