import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Cake } from '@/components/CakeCard';
import { sampleCakes } from '@/data/cakes';

interface CakeContextType {
  cakes: Cake[];
  addCake: (cake: Omit<Cake, 'id'>) => void;
  updateCake: (id: string, cake: Partial<Cake>) => void;
  deleteCake: (id: string) => void;
}

const CakeContext = createContext<CakeContextType | undefined>(undefined);

export const CakeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cakes, setCakes] = useState<Cake[]>(sampleCakes);

  const addCake = (cake: Omit<Cake, 'id'>) => {
    const newCake: Cake = {
      ...cake,
      id: Date.now().toString()
    };
    setCakes(prev => [...prev, newCake]);
  };

  const updateCake = (id: string, updatedFields: Partial<Cake>) => {
    setCakes(prev =>
      prev.map(cake =>
        cake.id === id ? { ...cake, ...updatedFields } : cake
      )
    );
  };

  const deleteCake = (id: string) => {
    setCakes(prev => prev.filter(cake => cake.id !== id));
  };

  return (
    <CakeContext.Provider value={{ cakes, addCake, updateCake, deleteCake }}>
      {children}
    </CakeContext.Provider>
  );
};

export const useCakes = () => {
  const context = useContext(CakeContext);
  if (context === undefined) {
    throw new Error('useCakes must be used within a CakeProvider');
  }
  return context;
};
