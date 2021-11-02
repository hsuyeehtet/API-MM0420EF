package com.kyn.springsocial.controller;

import com.kyn.springsocial.exception.ResourceNotFoundException;
import com.kyn.springsocial.model.User;
import com.kyn.springsocial.repository.UserRepository;
import com.kyn.springsocial.security.CurrentUser;
import com.kyn.springsocial.security.UserPrincipal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
