import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationPickerMap = ({ value, onChange }) => {
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return;

        const map = L.map(containerRef.current, {
            center: [-15.084058, -53.481445],
            zoom: 4,
            minZoom: 4,
            maxZoom: 16,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        map.on("click", (event) => {
            const { lat, lng } = event.latlng;
            onChange({ lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)) });
        });

        mapRef.current = map;

        return () => {
            map.remove();
            mapRef.current = null;
            markerRef.current = null;
        };
    }, [onChange]);

    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;

        if (value?.lat == null || value?.lng == null) {
            if (markerRef.current) {
                map.removeLayer(markerRef.current);
                markerRef.current = null;
            }
            return;
        }

        if (!markerRef.current) {
            markerRef.current = L.marker([value.lat, value.lng]).addTo(map);
        } else {
            markerRef.current.setLatLng([value.lat, value.lng]);
        }

        map.panTo([value.lat, value.lng]);
    }, [value]);

    return <div ref={containerRef} className="w-full h-[320px] border rounded-2xl shadow-lg" />;
};

export default LocationPickerMap;
