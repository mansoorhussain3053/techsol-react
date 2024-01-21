
import PortfolioGallery from "./PortfolioItems/PortfolioGallery";
import WhyChooseUs from "../Home/WhyChooseUs"
import NeedMoreHelp from "../Home/NeedMoreHelp"

const Portfolio = () => {
  const portfolioItems = [

    {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'ISC Therapy LLC',
        description:
          'Dr. Luo, a Counseling Psychology Ph.D. graduate, offers evidence-based psychological assessment, diagnosis, and psychotherapy for adults with various issues',
        imageUrl: 'https://imifti.com/assets/projects/ISC%20Therapy.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'uiuxdesign', 'logodesign'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'Exquisite Puppy Service',
        description:
          'More than adoption, its a match. Exquisite Puppy Services unite ethical breeders with ideal families, building lifelong bonds with every wag.',
        imageUrl: 'https://imifti.com/assets/projects/Exquisite%20Puppy%20Services.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'uiuxdesign'],
      },
      {
        subtitle: 'BRANDING, UI UX',
        title: 'Tools Of Energy Protection',
        description:
          'Tools of Energy Protection, building a haven of spiritual support for those who truly need it',
        imageUrl: 'https://imifti.com/assets/projects/Tools%20of%20Energy%20Protection.webp',
        categories: ['uiuxdesign', 'branding'],
        buttonText: 'See Project',
        tags: ['logodesign', 'uiuxdesign', 'branding'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'Texty',
        description:
          "Prioritizing usability and purpose, Texty's website was crafted with features that empower both users and the business. Clicks become conversions, journeys become success stories.",
        imageUrl: 'https://imifti.com/assets/projects/Texty.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'uiuxdesign', 'branding'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'West Metro Appliance Repair',
        description:
          'West Metro Appliance Repair, situated in Minnesota, specializes in servicing and repairing a diverse range of common household appliances, offering expert solutions for your home equipment.',
        imageUrl: 'https://imifti.com/assets/projects/west%20metro.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'logodesign', 'branding'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'CanitCash',
        description:
          'Canitcash is a convenient hub for buying and selling used electronics, offering a secure platform for individuals to connect and exchange their pre-owned tech gadgets effortlessly.',
        imageUrl: 'https://imifti.com/assets/projects/CanItCash.webp',
        categories: ['logodesign'],
        buttonText: 'See Project',
        tags: ['development', 'logodesign', 'branding'],
      },

      
  ];
  return (
    <>
      <PortfolioGallery items={portfolioItems} />
      <WhyChooseUs/>
      <NeedMoreHelp/>
    </>
  );
};

export default Portfolio;
