package com.foodexpress.service;

import com.foodexpress.dto.LoginRequest;
import com.foodexpress.dto.LoginResponse;
import com.foodexpress.dto.RegisterRequest;
import com.foodexpress.dto.RegisterResponse;
import com.foodexpress.entity.User;
import com.foodexpress.enums.UserRole;
import com.foodexpress.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       AuthenticationManager authenticationManager,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public RegisterResponse register(RegisterRequest request) {
        if (request == null) {
            throw new IllegalArgumentException("Request body is required");
        }

        if (!Objects.equals(request.getPassword(), request.getConfirmPassword())) {
            throw new IllegalArgumentException("Password and confirm password must match");
        }

        String email = request.getEmail().trim();
        String phone = request.getPhone().trim();

        if (userRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email already exists");
        }

        if (userRepository.existsByPhone(phone)) {
            throw new IllegalArgumentException("Phone number already exists");
        }

        User user = new User();
        user.setFullName(request.getFullName().trim());
        user.setEmail(email);
        user.setPhone(phone);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(UserRole.CUSTOMER);
        user.setEnabled(true);

        User savedUser = userRepository.save(user);

        return new RegisterResponse(
                savedUser.getId(),
                savedUser.getFullName(),
                savedUser.getEmail(),
                savedUser.getPhone(),
                savedUser.getRole()
        );
    }

    public LoginResponse login(LoginRequest request) {
        if (request == null) {
            throw new IllegalArgumentException("Request body is required");
        }

        String email = request.getEmail().trim();
        String password = request.getPassword();

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );

        if (!authentication.isAuthenticated()) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        String token = jwtService.generateToken(user);
        return new LoginResponse(token, user.getFullName(), user.getEmail(), user.getRole());
    }
}
