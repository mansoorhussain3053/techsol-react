
import PortfolioGallery from "./PortfolioItems/PortfolioGallery";

const Portfolio = () => {
  const portfolioItems = [
    {
     subtitle: 'DEVELOPMENT, UI UX',
      title: "Mind Peace Psychology",
      description: "Dr. Luo, a Counseling Psychology Ph.D. graduate, offers evidence-based psychological assessment, diagnosis, and psychotherapy for adults with various issues",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
      category: "uiuxdesign",
      buttonText: 'See Project',
    },
    {
        subtitle: 'Web Development',
         title: "Project 1",
         description: "Description for Project 1",
         imageUrl:
           "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
         category: "uiuxdesign",
         buttonText: 'View Details',
       },
       {
        subtitle: 'Web Development',
         title: "Project 1",
         description: "Description for Project 1",
         imageUrl:
           "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
         category: "uiuxdesign",
         buttonText: 'View Details',
       },
       {
        subtitle: 'Web Development',
         title: "Project 1",
         description: "Description for Project 1",
         imageUrl:
           "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
         category: "uiuxdesign",
         buttonText: 'View Details',
       },
  ];
  return (
    <>
      <PortfolioGallery items={portfolioItems} />
    </>
  );
};

export default Portfolio;
