package br.com.destinosdokite.DestinosDoKite.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "kite_points")
@Data
public class KitePoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false, length = 40)
    private String point;

    @Column(nullable = false, length = 120)
    private String localization;

    @Column(length = 120)
    private String airport;

    @Column(length = 120)
    private String season;

    @Column(nullable = false, length = 1000)
    private String description;

    @Column(nullable = false, length = 10)
    private String state;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "kite_point_images", joinColumns = @JoinColumn(name = "kite_point_id"))
    @Column(name = "image_url", length = 500)
    private List<String> images = new ArrayList<>();
}
