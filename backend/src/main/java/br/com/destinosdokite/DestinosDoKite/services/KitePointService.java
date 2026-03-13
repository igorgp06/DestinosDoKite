package br.com.destinosdokite.DestinosDoKite.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import br.com.destinosdokite.DestinosDoKite.models.KitePoint;
import br.com.destinosdokite.DestinosDoKite.repositorys.KitePointRepository;

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
