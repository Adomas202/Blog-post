import { BlogsModule } from './blogs.module';

describe('BlogsModule', () => {
  let blogsModule: BlogsModule;

  beforeEach(() => {
    blogsModule = new BlogsModule();
  });

  it('should create an instance', () => {
    expect(blogsModule).toBeTruthy();
  });
});
