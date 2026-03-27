package br.com.destinosdokite.DestinosDoKite.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.destinosdokite.DestinosDoKite.models.KitePoint;

public interface KitePointRepository extends JpaRepository<KitePoint, Long> {

    List<KitePoint> findByState(String state);
}
