"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dataProperties } from '../components/Properties/Properties.data';
import { API } from '../types/types';

type FilterType = {
  location: string | null;
  propertyType: string | null;
  price: string | null;
};

// Define el tipo para el contexto
type PropertiesContextType = {
  properties: API[];
  setProperties: React.Dispatch<React.SetStateAction<API[]>>;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  applyFilters: (criteria: Partial<FilterType>) => void;
};

// Crea el contexto
const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export function useProperties() {
  const context = useContext(PropertiesContext);
  if (context === undefined) {
    throw new Error('useProperties debe ser utilizado dentro de un PropertiesProvider');
  }
  return context;
}

// Proveedor de contexto
type PropertiesProviderProps = {
  children: ReactNode;
};

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<API[]>(dataProperties);
  const [filters, setFilters] = useState<FilterType>({
    location: null,
    propertyType: null,
    price: null
  });

  const applyFilters = (criteria: Partial<FilterType>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...criteria,
    }));
  };
  
  useEffect(() => {
    const filteredProperties = dataProperties.filter(property => {
      const isLocationMatch = filters.location === null || property.state === filters.location;
      const isPropertyTypeMatch = filters.propertyType === null || property.propertyType === filters.propertyType;
      const isPriceMatch = filters.price === null || checkPriceRange(property.price, filters.price);

      return isLocationMatch && isPropertyTypeMatch && isPriceMatch;
    });
    setProperties(filteredProperties);
  }, [filters]);

  const checkPriceRange = (propertyPrice: number, filterPrice: string) => {
    const [range1, range2] = filterPrice
      .split('-')
      .map(value => parseFloat(value.replace(/[^0-9]/g, '')));
      
    const adjustedRange1 = range1 / 100;
    const adjustedRange2 = range2 / 100;
      
    return !isNaN(adjustedRange1) && !isNaN(adjustedRange2) && 
    propertyPrice >= adjustedRange1 && propertyPrice <= adjustedRange2;
  };

  const value: PropertiesContextType = {
    properties,
    setProperties,
    filters,
    setFilters,
    applyFilters,
  };

  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
}
