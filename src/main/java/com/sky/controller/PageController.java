package com.sky.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
    @GetMapping("/page2")
    public String E2() {
        return "Examine2";
    }

    @GetMapping("/page3")
    public String E3() {
        return "Examine3";
    }

    @GetMapping("/Examine2.html")
    public String e2() {
        return "Examine2";
    }
}
