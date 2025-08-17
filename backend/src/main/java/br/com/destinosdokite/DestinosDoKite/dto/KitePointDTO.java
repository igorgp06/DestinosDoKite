package br.com.destinosdokite.DestinosDoKite.dto;

import br.com.destinosdokite.DestinosDoKite.models.KitePoint;

public record KitePointDTO(
        Long id,
        String name,
        String point,
        String localization,
        String airport,
        String season,
        String description,
        Double latitude,
        Double longitude
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
                kitePoint.getLatitude(),
                kitePoint.getLongitude()
        );
    }
}
