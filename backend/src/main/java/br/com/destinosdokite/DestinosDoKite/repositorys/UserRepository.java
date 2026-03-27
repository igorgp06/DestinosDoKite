package br.com.destinosdokite.DestinosDoKite.repositorys;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import br.com.destinosdokite.DestinosDoKite.models.User;

@Repository
public class UserRepository {

    @Value("${app.security.admin.username}")
    private String adminUsername;

    @Value("${app.security.admin.password}")
    private String adminPassword;

    public Optional<User> findByUsername(String username) {
        if (adminUsername != null && adminUsername.equals(username)) {
            return Optional.of(new User(adminUsername, adminPassword));
        }

        return Optional.empty();
    }
}
