import { useMemo, useState } from "react";
import LocationPickerMap from "../../components/locationPickerMap";

const initialForm = {
    name: "",
    point: "Escola de Kitesurf",
    localization: "",
    airport: "",
    season: "",
    description: "",
    state: "",
    latitude: "",
    longitude: "",
    images: "",
};

export const AdminKitePoint = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [token, setToken] = useState(localStorage.getItem("admin_token") ?? "");
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const isAuthenticated = useMemo(() => Boolean(token), [token]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.error ?? "Falha ao autenticar.");
                return;
            }

            localStorage.setItem("admin_token", data.token);
            setToken(data.token);
            setMessage("Login realizado com sucesso.");
        } finally {
            setLoading(false);
        }
    };

    const handleCoordinateChange = ({ lat, lng }) => {
        setForm((prev) => ({ ...prev, latitude: String(lat), longitude: String(lng) }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");
        setLoading(true);

        const images = form.images
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

        const payload = {
            ...form,
            latitude: Number(form.latitude),
            longitude: Number(form.longitude),
            images,
        };

        try {
            const response = await fetch("/api/kitepoints", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.error ?? "Não foi possível cadastrar o ponto.");
                return;
            }

            setForm(initialForm);
            setMessage(`Cadastro realizado com sucesso: ${data.name}.`);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("admin_token");
        setToken("");
        setMessage("Sessão encerrada.");
    };

    return (
        <section className="min-h-screen bg-background pt-24 pb-10 px-4">
            <div className="container max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Painel do proprietário</h1>
                <p className="mb-6">Faça login e cadastre nova escola ou kite point selecionando o local exato no mapa.</p>

                {!isAuthenticated ? (
                    <form className="space-y-4 bg-card border rounded-xl p-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block mb-1">Usuário</label>
                            <input
                                className="w-full border rounded-md p-2"
                                value={credentials.username}
                                onChange={(event) => setCredentials((prev) => ({ ...prev, username: event.target.value }))}
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Senha</label>
                            <input
                                type="password"
                                className="w-full border rounded-md p-2"
                                value={credentials.password}
                                onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
                            />
                        </div>
                        <button className="px-5 py-2 rounded-md bg-primary text-primary-foreground" disabled={loading}>
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                    </form>
                ) : (
                    <form className="space-y-4 bg-card border rounded-xl p-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input className="border rounded-md p-2" placeholder="Nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            <select className="border rounded-md p-2" value={form.point} onChange={(e) => setForm({ ...form, point: e.target.value })}>
                                <option>Escola de Kitesurf</option>
                                <option>Kitepoint</option>
                            </select>
                            <input className="border rounded-md p-2" placeholder="Localização" value={form.localization} onChange={(e) => setForm({ ...form, localization: e.target.value })} />
                            <input className="border rounded-md p-2" placeholder="Estado (código IBGE)" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
                            <input className="border rounded-md p-2" placeholder="Aeroporto" value={form.airport} onChange={(e) => setForm({ ...form, airport: e.target.value })} />
                            <input className="border rounded-md p-2" placeholder="Temporada" value={form.season} onChange={(e) => setForm({ ...form, season: e.target.value })} />
                        </div>

                        <textarea className="w-full border rounded-md p-2" placeholder="Descrição" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />

                        <LocationPickerMap
                            value={{
                                lat: form.latitude === "" ? null : Number(form.latitude),
                                lng: form.longitude === "" ? null : Number(form.longitude),
                            }}
                            onChange={handleCoordinateChange}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                            <input className="border rounded-md p-2" placeholder="Latitude" value={form.latitude} onChange={(e) => setForm({ ...form, latitude: e.target.value })} />
                            <input className="border rounded-md p-2" placeholder="Longitude" value={form.longitude} onChange={(e) => setForm({ ...form, longitude: e.target.value })} />
                        </div>

                        <textarea
                            className="w-full border rounded-md p-2"
                            placeholder="URLs das imagens (uma por linha)"
                            rows={4}
                            value={form.images}
                            onChange={(e) => setForm({ ...form, images: e.target.value })}
                        />

                        <div className="flex gap-3">
                            <button className="px-5 py-2 rounded-md bg-primary text-primary-foreground" disabled={loading}>
                                {loading ? "Salvando..." : "Cadastrar"}
                            </button>
                            <button type="button" className="px-5 py-2 rounded-md border" onClick={logout}>Sair</button>
                        </div>
                    </form>
                )}

                {message && <p className="mt-4">{message}</p>}
            </div>
        </section>
    );
};
