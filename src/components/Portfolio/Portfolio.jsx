
import PortfolioGallery from "./PortfolioItems/PortfolioGallery";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
      category: "uiuxdesign",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
      category: "category2",
    },
    {
      title: "Project 4",
      description: "Description for Project 2",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
      category: "category3",
    },
    {
        title: "Project 4",
        description: "Description for Project 2",
        imageUrl:
          "https://avatars.mds.yandex.net/i?id=dece3f518173d177ae4f17bf6d2b3891-4600186-images-thumbs&n=13",
        category: "category3",
      },
  ];
  return (
    <>
      <PortfolioGallery items={portfolioItems} />
    </>
  );
};

export default Portfolio;
