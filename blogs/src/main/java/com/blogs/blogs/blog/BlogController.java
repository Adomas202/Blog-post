package com.blogs.blogs.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@CrossOrigin
public class BlogController {

    @Autowired
    BlogService blogService;

    @GetMapping("/blogs")
    public List<Blog> getBlogs() {
        return blogService.findAll();
    }

    @PostMapping("/blogs")
    public void addBlog(@RequestBody Blog blog) {
        blogService.save(blog);
    }

    @GetMapping("/blogs/{id}")
    public Blog addBlog(@PathVariable Long id) {
        return blogService.getOne(id);
    }
}
