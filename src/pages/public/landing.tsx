import { CommonBreadCrumb } from "@/components/shared/breadcrumb";

const Landing = () => {
  const items = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "About",
      href: "/about",
    },
    {
      id: 3,
      label: "Contact",
      href: "/about",
    },
    {
      id: 4,
      label: "Profile",
      href: "/profile",
    },
    {
      id: 5,
      label: "Account",
      href: "/account",
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
