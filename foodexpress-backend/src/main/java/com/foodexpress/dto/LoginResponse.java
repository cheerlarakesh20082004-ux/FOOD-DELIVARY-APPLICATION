package com.foodexpress.dto;

import com.foodexpress.enums.UserRole;

public class LoginResponse {

    private String token;
    private String type = "Bearer";
    private String fullName;
    private String email;
    private UserRole role;

    public LoginResponse() {
    }

    public LoginResponse(String token, String fullName, String email, UserRole role) {
        this.token = token;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
