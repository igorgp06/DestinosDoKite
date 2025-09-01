import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ escolas, estadoSelecionado }) => {
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const markersRef = useRef(null);
    const geoLayerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return;

        const map = L.map(containerRef.current, {
            zoomControl: false,
            center: [-15.084058, -53.481445],
            zoom: 4,
            minZoom: 4,
            maxZoom: 14,
        });

        L.tileLayer("", {
            
        }).addTo(map);

        mapRef.current = map;
        markersRef.current = L.layerGroup().addTo(map);

        setTimeout(() => map.invalidateSize(), 0);

        return () => {
            map.remove();
            mapRef.current = null;
            markersRef.current = null;
            geoLayerRef.current = null;
        };
    }, []);

    useEffect(() => {
        const map = mapRef.current;
        if (!map || !estadoSelecionado) return;

        if (geoLayerRef.current) {
            map.removeLayer(geoLayerRef.current);
        }

        fetch(`/assets/static/JSON/states/${estadoSelecionado}.json`)
            .then((res) => res.json())
            .then((data) => {
                const layer = L.geoJSON(data, {
                    style: {
                        color: "#2563eb",
                        weight: 2,
                        fillColor: "#3b82f6",
                        fillOpacity: 0.1,
                    },
                }).addTo(map);

                geoLayerRef.current = layer;

                map.fitBounds(layer.getBounds(), { padding: [20, 20] });
            });
    }, [estadoSelecionado]);

    useEffect(() => {
        const map = mapRef.current;
        const group = markersRef.current;
        if (!map || !group) return;

        group.clearLayers();

        if (escolas && escolas.length) {
            escolas.forEach((e) => {
                const kiteMarker = L.icon({
                    iconUrl: "/assets/static/imgs/pages/filter/kitesurf.png",
                    iconSize: [24, 24],
                });

                const m = L.marker([e.lat, e.lng], { icon: kiteMarker })
                    .bindPopup(`<b>${e.name}</b><br/>${e.location}`);

                group.addLayer(m);
            });
        }
    }, [escolas]);

    return (
        <div
            ref={containerRef}
            className="w-[65vh] h-[350px] md:h-[400px] border rounded-2xg shadow-lg"
        />
    );
};

export default Map;
