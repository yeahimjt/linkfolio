import { Timestamp } from 'firebase/firestore';

export type UserData = {
  firstName: string | null;
  lastName: string | null;
  displayName: string | null;
  email: string;
  emailVisible: boolean;
  newsletter: boolean;
  photoURL: string | null;
  portfolioURL: string | null;
  setup: boolean;
  title: string | null;
  uid: string;
  status: string;
};

export type PortfolioData = {
  photoURL: string[];
  portfolioURL: string;
  owner_displayName: string;
  owner_photoURL: string;
  owner_title: string;
  views: number;
  timestamp: Timestamp;
  uid: string;
  likes: number;
  videoURL: string;
  id: string;
};
