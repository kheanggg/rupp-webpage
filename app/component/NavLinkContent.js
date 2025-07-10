export default function NavLinkContent({ activeLabel }) {
  const contentMap = {
    "About Us": ["Vision", "Mission", "Leadership"],
    "Academics": ["Programs", "Faculties", "Departments"],
    "Admissions": ["How to Apply", "Requirements", "Tuition"],
    "News & Events": ["Latest News", "Upcoming Events"],
    "Contact Us": ["Support", "Location", "Hotline"],
  };

  return (
    <div className="bg-white w-full pb-6 transition-opacity duration-500 ease-in-ou">
      {contentMap[activeLabel]?.map((item, index) => (
        <p key={index} className="text-sm text-gray-700 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-red-600">{item}</p>
      ))}
    </div>
  );
}
