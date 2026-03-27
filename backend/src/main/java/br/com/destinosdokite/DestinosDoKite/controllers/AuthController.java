package br.com.destinosdokite.DestinosDoKite.controllers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.destinosdokite.DestinosDoKite.dto.LoginDTO;
import br.com.destinosdokite.DestinosDoKite.models.User;
import br.com.destinosdokite.DestinosDoKite.repositorys.UserRepository;
import br.com.destinosdokite.DestinosDoKite.services.TokenService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenService tokenService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody @Valid LoginDTO loginDTO) {
        User user = userRepository.findByUsername(loginDTO.username()).orElse(null);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Credenciais inválidas."));
        }

        boolean matches = passwordEncoder.matches(loginDTO.password(), user.getPassword())
                || loginDTO.password().equals(user.getPassword());

        if (!matches) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Credenciais inválidas."));
        }

        String token = tokenService.generateToken(user);
        return ResponseEntity.ok(Map.of("token", token));
    }
}
