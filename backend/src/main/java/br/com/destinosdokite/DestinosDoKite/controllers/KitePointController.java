package br.com.destinosdokite.DestinosDoKite.controllers;

import br.com.destinosdokite.DestinosDoKite.dto.KitePointDTO;
import br.com.destinosdokite.DestinosDoKite.services.KitePointService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/kitepoints")
public class KitePointController {

    private final KitePointService kitePointService;

    public KitePointController(KitePointService kitePointService) {
        this.kitePointService = kitePointService;
    }

    @GetMapping
    public List<KitePointDTO> getAllKitePoints(@RequestParam(required = false) String state) {
        return kitePointService.findAll(state).stream()
                .map(KitePointDTO::new)
                .collect(Collectors.toList());
    }

    @GetMapping("{id}")
    public ResponseEntity<KitePointDTO> getKitePointById(@PathVariable Long id) {
        return kitePointService.findById(id)
                .map(kitePoint -> ResponseEntity.ok(new KitePointDTO(kitePoint)))
                .orElse(ResponseEntity.notFound().build());
    }
}
