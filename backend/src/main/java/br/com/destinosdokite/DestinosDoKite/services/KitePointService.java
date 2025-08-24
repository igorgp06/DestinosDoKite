package br.com.destinosdokite.DestinosDoKite.services;

import br.com.destinosdokite.DestinosDoKite.models.KitePoint;
import br.com.destinosdokite.DestinosDoKite.repositorys.KitePointRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KitePointService {

    private final KitePointRepository kitePointRepository;

    public KitePointService(KitePointRepository kitePointRepository) {
        this.kitePointRepository = kitePointRepository;
    }



    public Optional<KitePoint> findById(Long id) {
        return kitePointRepository.findById(id);
    }
}
