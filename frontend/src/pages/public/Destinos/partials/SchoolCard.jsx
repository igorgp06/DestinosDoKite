const SchoolCard = ({ escola, onClick }) => (
    <div className="p-8 bg-card text-primary-foreground border rounded-lg shadow cursor-pointer"
        onClick={onClick}>
        <h3 className="font-bold text-lg">{escola.name}</h3>
        <p>{escola.location}</p>
        <p className="text-md text-primary-foreground">Temporada: {escola.season}</p>
    </div>
);

export default SchoolCard;