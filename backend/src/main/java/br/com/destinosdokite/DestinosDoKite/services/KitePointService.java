package br.com.destinosdokite.DestinosDoKite.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.com.destinosdokite.DestinosDoKite.dto.CreateKitePointDTO;
import br.com.destinosdokite.DestinosDoKite.models.KitePoint;
import br.com.destinosdokite.DestinosDoKite.repositorys.KitePointRepository;

@Service
public class KitePointService {

    private final KitePointRepository kitePointRepository;

    public KitePointService(KitePointRepository kitePointRepository) {
        this.kitePointRepository = kitePointRepository;
    }

    public Optional<KitePoint> findById(Long id) {
        if (id == null) {
            return Optional.empty();
        }
        return kitePointRepository.findById(id);
    }

    public List<KitePoint> findAll() {
        return kitePointRepository.findAll();
    }

    public List<KitePoint> findByState(String state) {
        return kitePointRepository.findByState(state);
    }

    public KitePoint create(CreateKitePointDTO dto) {
        KitePoint kitePoint = new KitePoint();
        kitePoint.setName(dto.name());
        kitePoint.setPoint(dto.point());
        kitePoint.setLocalization(dto.localization());
        kitePoint.setAirport(dto.airport());
        kitePoint.setSeason(dto.season());
        kitePoint.setDescription(dto.description());
        kitePoint.setState(dto.state());
        kitePoint.setLatitude(dto.latitude());
        kitePoint.setLongitude(dto.longitude());
        kitePoint.setImages(dto.images());

        return kitePointRepository.save(kitePoint);
    }
}
