package br.com.destinosdokite.DestinosDoKite.dto;

import java.util.List;

import br.com.destinosdokite.DestinosDoKite.models.KitePoint;

public record KitePointDTO(
        Long id,
        String name,
        String point,
        String localization,
        String airport,
        String season,
        String description,
        String state,
        Double latitude,
        Double longitude,
        List<String> images
) {
    public KitePointDTO(KitePoint kitePoint) {
        this(
                kitePoint.getId(),
                kitePoint.getName(),
                kitePoint.getPoint(),
                kitePoint.getLocalization(),
                kitePoint.getAirport(),
                kitePoint.getSeason(),
                kitePoint.getDescription(),
                kitePoint.getState(),
                kitePoint.getLatitude(),
                kitePoint.getLongitude(),
                kitePoint.getImages()
        );
    }
}
