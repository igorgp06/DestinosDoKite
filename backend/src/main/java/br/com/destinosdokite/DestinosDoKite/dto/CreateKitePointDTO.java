package br.com.destinosdokite.DestinosDoKite.dto;

import java.util.List;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CreateKitePointDTO(
        @NotBlank @Size(max = 120) String name,
        @NotBlank @Size(max = 40) String point,
        @NotBlank @Size(max = 120) String localization,
        @Size(max = 120) String airport,
        @Size(max = 120) String season,
        @NotBlank @Size(max = 1000) String description,
        @NotBlank @Size(max = 10) String state,
        @NotNull @Min(-90) @Max(90) Double latitude,
        @NotNull @Min(-180) @Max(180) Double longitude,
        @NotNull @NotEmpty List<@NotBlank @Size(max = 500) String> images
) {
}
