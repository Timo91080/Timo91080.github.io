import React, { useState } from 'react';

const formations = [
  {
    id: 1,
    title: 'Formation 1',
    description: 'Description de la formation 1',
  },
  {
    id: 2,
    title: 'Formation 2',
    description: 'Description de la formation 2',
  },
  {
    id: 3,
    title: 'Formation 3',
    description: 'Description de la formation 3',
  },
];

const FormationPage = () => {
  const [selectedFormation, setSelectedFormation] = useState(null);

  const handleClick = (formationId) => {
    const selected = formations.find((formation) => formation.id === formationId);
    setSelectedFormation(selected);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Offres de formation</h1>
      <div className="grid grid-cols-3 gap-8">
        {formations.map((formation) => (
          <div
            key={formation.id}
            className="border p-4 rounded shadow cursor-pointer"
            onClick={() => handleClick(formation.id)}
          >
            <h2 className="text-lg font-bold mb-2">{formation.title}</h2>
            <p>{formation.description}</p>
          </div>
        ))}
      </div>
      {selectedFormation && (
        <div className="mt-8 border p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{selectedFormation.title}</h2>
          <p>{selectedFormation.description}</p>
        </div>
      )}
    </div>
  );
};

export default FormationPage;
