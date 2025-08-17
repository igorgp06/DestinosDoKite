package br.com.destinosdokite.DestinosDoKite.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "kite_points")
@Data
public class KitePoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 11)
    private String name;

    @Column(nullable = false, length = 37)
    private String point;

    @Column(nullable = false, length = 100)
    private String localization;

    @Column
    private String airport;

    @Column
    private String season;

    @Column(nullable = false, length = 113)
    private String description;

    private Double latitude;

    private Double longitude;

}
