package br.com.destinosdokite.DestinosDoKite.repositorys;

import br.com.destinosdokite.DestinosDoKite.models.KitePoint;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KitePointRepository extends JpaRepository<KitePoint, Long> {

    List<KitePoint> findByState(String state);
}
