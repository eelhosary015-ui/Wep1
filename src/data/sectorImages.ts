import distribution from '../assets/images/industry_distribution_1793274482238.jpg';
import manufacturing from '../assets/images/industry_manufacturing_1793274481329.jpg';
import hospitality from '../assets/images/industry_hospitality_1793274481103.jpg';
import headquarters from '../assets/images/hero_enterprise_hq_1793274480206.jpg';
import gym from '../assets/images/sector_gym_club_1794307067911.jpg';

/**
 * Sector imagery is imported so Vite fingerprints and copies the files
 * during `vite build` instead of leaving raw /src paths in production.
 */
export const SECTOR_IMAGES = {
  distribution,
  manufacturing,
  hospitality,
  multibranch: headquarters,
  restaurants: hospitality,
  realestate: headquarters,
  gym,
};

