import { CommonBreadCrumb } from "@/components/shared/breadcrumb";
import { Home, Paperclip } from "lucide-react";

const Landing = () => {
  const items = [
    {
      id: 1,
      label: "Home",
      href: "/",
      icon: <Home size={16} />,
    },
    {
      id: 2,
      label: "About",
      href: "/about",
      icon: <Paperclip size={16} />,
    },
    {
      id: 3,
      label: "Contact",
      href: "/about",
      icon: <Paperclip />,
    },
  ];
  return (
    <div>
      <p>Landing Page</p>
      <CommonBreadCrumb items={items} />
    </div>
  );
};

export default Landing;
