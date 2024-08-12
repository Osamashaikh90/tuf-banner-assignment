import {
  DSASheet,
  SystemDesign,
  TechnicalBlogs,
  CP,
  CS,
  Youtube,
} from "../utils/Constants";
import PerkCard from "./PerkCard";
const cardContent = [
  {
    id: 1,
    icon: <DSASheet />,
    title: "Striver's DSA Sheet",
    description: "Boost your DSA skills with our handy cheat sheets.",
    className: "bg-[#E9F3FF] dark:bg-[#3d3d3d73]",
  },
  {
    id: 2,
    icon: <SystemDesign />,
    title: "System Design",
    description: "Design better systems with our simplified approach.",
    className: "bg-[#FBE4E6] dark:bg-[#3d3d3d73]",
  },
  {
    id: 3,
    icon: <TechnicalBlogs />,
    title: "Technical Blogs",
    description: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
    className: "bg-[#EDF3F7] dark:bg-[#3d3d3d73]",
  },
  {
    id: 4,
    icon: <Youtube />,
    title: "Striver's DSA Playlist",
    description:
      "Master algorithms effortlessly with our curated DSA playlist.",
    className: "bg-[#FBE4E6] dark:bg-[#3d3d3d73]",
  },
  {
    id: 5,
    icon: <CS />,
    title: "CP Subjects",
    description: "Demystify CS topics with our easy-to-understand guides.",
    className: "bg-[#EFEEF7] dark:bg-[#3d3d3d73]",
  },
  {
    id: 6,
    icon: <CP />,
    title: "Striver's CP Sheet",
    description: "Level up your coding game with our practice resources.",
    className: "bg-[#FFF9EB] dark:bg-[#3d3d3d73]",
  },
];
const Perks = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 px-24 mb-2 place-items-center"  >
      
        {cardContent?.map((card) => {
          return (
           <PerkCard key={card.id} card={card}/>
          );
        })}
       
      </div>
    </>
  );
};

export default Perks;
