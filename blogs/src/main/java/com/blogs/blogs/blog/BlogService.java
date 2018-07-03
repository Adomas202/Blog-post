package com.blogs.blogs.blog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogService extends JpaRepository<Blog, Long> {


}
