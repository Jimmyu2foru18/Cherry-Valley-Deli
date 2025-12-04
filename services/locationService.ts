import { BUSINESS_INFO } from "../constants";

// Haversine formula to calculate distance in miles
export const calculateDistance = (lat1: number, lon1: number): number => {
  const lat2 = BUSINESS_INFO.coords.lat;
  const lon2 = BUSINESS_INFO.coords.lng;

  const R = 3958.8; // Radius of the Earth in miles
  const rlat1 = lat1 * (Math.PI / 180); 
  const rlat2 = lat2 * (Math.PI / 180); 
  const difflat = rlat2 - rlat1; 
  const difflon = (lon2 - lon1) * (Math.PI / 180); 

  const d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
  return parseFloat(d.toFixed(1));
};