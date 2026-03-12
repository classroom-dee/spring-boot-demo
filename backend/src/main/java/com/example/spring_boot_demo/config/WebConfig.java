// from browser's perspective both server and frontend are localhost/ -> no need
// for a CORS

// package com.example.spring_boot_demo.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {

// @Override
// public void addCorsMappings(CorsRegistry registry) {
// registry.addMapping("/**")
// .allowedOrigins("http://localhost:8080") // browser origin is 8080 (nginx)
// .allowedMethods("*");
// }

// }
