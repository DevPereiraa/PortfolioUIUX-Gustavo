import { 
  LogoProject1, ImagesProject1,

  LogoProject2, ImagesProject2,

  LogoProject3, ImagesProject3,

  LogoProject4, ImagesProject4,

  LogoProject5, ImagesProject5,

  LogoProject6, ImagesProject6,



} from '@/utils/image';

export const projects = [
  {
    id: 1,
    name: "FieldPRO",
    description: "FieldPRO, Branding.",
    thumbnail: LogoProject1.Project1Logo,
    images: Object.values(ImagesProject1),
  },
  {
    id: 2,
    name: "iZune",
    description: "iZune, Art agency, Web Design.",
    thumbnail: LogoProject2.Project2Logo,
    images: Object.values(ImagesProject2),
  },
  {
    id: 3,
    name: "Aourum",
    description: "Aourum, Luxury clothing Website.",
    thumbnail: LogoProject3.Project3Logo,
    images: Object.values(ImagesProject3),
  },
  {
    id: 4,
    name: "Triping",
    description: "Triping, Travel app, Brand Design.",
    thumbnail: LogoProject4.Project4Logo,
    images: Object.values(ImagesProject4),
  },
  {
    id: 5,
    name: "Ultra Shop",
    description: "Ultra Shop, Ecommerce, Website.",
    thumbnail: LogoProject5.Project5Logo,
    images: Object.values(ImagesProject5),
  },
  {
    id: 6,
    name: "Obi Bank",
    description: "Obi Bank, Bank App, App Design.",
    thumbnail: LogoProject6.Project6Logo,
    images: Object.values(ImagesProject6),
  },

];
