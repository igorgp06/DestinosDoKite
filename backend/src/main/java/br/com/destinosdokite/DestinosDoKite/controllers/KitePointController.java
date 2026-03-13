package br.com.destinosdokite.DestinosDoKite.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.destinosdokite.DestinosDoKite.dto.KitePointDTO;
import br.com.destinosdokite.DestinosDoKite.services.KitePointService;

@RestController
@RequestMapping("/api/kitepoints")
public class KitePointController {

    private final KitePointService kitePointService;

    public KitePointController(KitePointService kitePointService) {
        this.kitePointService = kitePointService;
    }



    @GetMapping("{id}")
    public ResponseEntity<KitePointDTO> getKitePointById(@PathVariable Long id) {
        return kitePointService.findById(id)
                .map(kitePoint -> ResponseEntity.ok(new KitePointDTO(kitePoint)))
                .orElse(ResponseEntity.notFound().build());
    }
}
