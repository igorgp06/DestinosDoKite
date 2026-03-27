package br.com.destinosdokite.DestinosDoKite.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.destinosdokite.DestinosDoKite.dto.CreateKitePointDTO;
import br.com.destinosdokite.DestinosDoKite.dto.KitePointDTO;
import br.com.destinosdokite.DestinosDoKite.models.KitePoint;
import br.com.destinosdokite.DestinosDoKite.services.KitePointService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/kitepoints")
public class KitePointController {

    private final KitePointService kitePointService;

    public KitePointController(KitePointService kitePointService) {
        this.kitePointService = kitePointService;
    }

    @GetMapping
    public ResponseEntity<List<KitePointDTO>> getKitePoints(@RequestParam(required = false) String state) {
        List<KitePoint> kitePoints = state == null || state.isBlank()
                ? kitePointService.findAll()
                : kitePointService.findByState(state);

        return ResponseEntity.ok(kitePoints.stream().map(KitePointDTO::new).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<KitePointDTO> getKitePointById(@PathVariable Long id) {
        return kitePointService.findById(id)
                .map(kitePoint -> ResponseEntity.ok(new KitePointDTO(kitePoint)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<KitePointDTO> createKitePoint(@RequestBody @Valid CreateKitePointDTO createKitePointDTO) {
        KitePoint created = kitePointService.create(createKitePointDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(new KitePointDTO(created));
    }
}
