
import PortfolioGallery from "./PortfolioItems/PortfolioGallery";

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
        title: 'ISC Therapy LLC',
        description:
          'Dr. Luo, a Counseling Psychology Ph.D. graduate, offers evidence-based psychological assessment, diagnosis, and psychotherapy for adults with various issues',
        imageUrl: 'https://imifti.com/assets/projects/ISC%20Therapy.webp',
        categories: ['uiuxdesign', 'development'],
        buttonText: 'See Project',
        tags: ['development', 'uiuxdesign', 'logodesign'],
      },
  ];
  return (
    <>
      <PortfolioGallery items={portfolioItems} />
    </>
  );
};

export default Portfolio;
