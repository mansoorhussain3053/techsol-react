
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
          'Exquisite Puppy Spot is a trustworthy network that pairs loving and compassionate breeders with families to nurture puppies.',
        imageUrl: 'https://imifti.com/assets/projects/Exquisite%20Puppy%20Services.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'uiuxdesign'],
      },
      {
        subtitle: 'BRANDING, UI UX',
        title: 'Tools of Energy Protection',
        description:
          'The main vision of the site is to provide the spiritual wellness to the deserving ones.',
        imageUrl: 'https://imifti.com/assets/projects/Tools%20of%20Energy%20Protection.webp',
        categories: ['uiuxdesign', 'branding'],
        buttonText: 'See Project',
        tags: ['logodesign', 'uiuxdesign', 'branding'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'Texty',
        description:
          'In the web development of Texty, my first priority was to work on its functionality, ensuring that the website has all the necessary functions to meet the needs of the users and the business.',
        imageUrl: 'https://imifti.com/assets/projects/Texty.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'uiuxdesign', 'branding'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'West Metro Appliance Repair',
        description:
          'West Metro Appliance Repair is a repair shop located in Minnesota that specializes in providing services and repairs for a wide variety of standard home appliances.',
        imageUrl: 'https://imifti.com/assets/projects/west%20metro.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'logodesign', 'branding'],
      },
      {
        subtitle: 'DEVELOPMENT, UI UX',
        title: 'CanitCash',
        description:
          'Canitcash is your one-stop shop for buying and selling used electronics. We provide a safe and convenient platform for individuals to connect and exchange their pre-owned tech gadgets.',
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
