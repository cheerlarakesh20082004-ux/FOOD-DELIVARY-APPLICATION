package com.foodexpress.dto;

import com.foodexpress.enums.UserRole;

public class RegisterResponse {
    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private UserRole role;

    public RegisterResponse() {
    }

    public RegisterResponse(Long id, String fullName, String email, String phone, UserRole role) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
