import profileData from '@/profile.json';

export interface Profile {
  name: string;
  title: string;
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    username: string;
    url: string;
  };
  website: string;
  location: string;
  bio: string;
}

export const profile: Profile = profileData;
