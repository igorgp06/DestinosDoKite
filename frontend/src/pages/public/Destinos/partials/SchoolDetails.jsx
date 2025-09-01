const SchoolDetails = ({ escola, onClose }) => (
    
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-48">
        <div className="bg-primary p-6 m-3 rounded-lg shadow-lg w-[95vh] max-w-lg relative">

            <button onClick={onClose} className="absolute top-2 right-2">X</button>

            <h2 className="text-2xl font-bold mb-2">{escola.name}</h2>
            <p>{escola.location}</p>
            <p>{escola.airport}</p>
            <p>{escola.season}</p>

            <div className="grid grid-cols-2 gap-2 mt-2">
                {escola.images?.map((img, i) => (
                    <img key={i} src={img} alt={escola.name} className="rounded border border-primary" />
                ))}
            </div>

        </div>
    </div>
);

export default SchoolDetails;
