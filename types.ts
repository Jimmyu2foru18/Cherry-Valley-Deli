export type Page = 'HOME' | 'MENU' | 'ABOUT' | 'REVIEWS' | 'LOCATION' | 'ORDER' | 'CAREERS' | 'LOGIN' | 'DASHBOARD';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  imageUrl: string;
  tags?: string[]; // e.g., "Spicy", "New", "Best Seller"
  featured?: boolean;
}

export enum Category {
  ALL = 'All',
  BREAKFAST = 'Breakfast',
  SPECIALTY = 'Specialty Heroes',
  CHICKEN = 'Chicken Heroes & Rolls',
  BEEF = 'Beef Heroes & Rolls',
  BURGERS = 'Burgers & Grill',
  WRAPS = 'Wraps',
  SANDWICHES = 'Classic Sandwiches',
  APPETIZERS = 'Appetizers',
  SALADS = 'Salads',
  SOUPS = 'Soups',
  BEVERAGES = 'Beverages'
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string;
  source: 'Grubhub' | 'Seamless' | 'Direct';
}

export interface BusinessInfo {
  address: string;
  phone: string;
  hours: string;
  coords: {
    lat: number;
    lng: number;
  };
}

// --- EMPLOYMENT SYSTEM TYPES ---

export type Role = 'OWNER' | 'MANAGER' | 'STAFF';

export interface Employee {
  id: string;
  name: string;
  role: Role;
  position: string; // e.g., "Head Chef", "Delivery Driver"
  email: string;
  phone: string;
  avatarUrl?: string;
}

export interface Shift {
  id: string;
  employeeId: string;
  day: string; // 'Mon', 'Tue', etc.
  startTime: string;
  endTime: string;
  area: string; // 'Kitchen', 'Front', 'Delivery'
}

export interface JobPosting {
  id: string;
  title: string;
  type: 'Full-time' | 'Part-time';
  salary: string;
  description: string;
}