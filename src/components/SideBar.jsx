import { ScrollArea } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  PlusCircle,
  MessageCircle,
  Trophy,
  Gift,
  Settings,
  HelpCircle,
} from "lucide-react";

function SideBar() {
  const navigate = useNavigate();
  const topMenuItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    { icon: PlusCircle, label: "Post a Doubt", href: "/dashboard/postdoubt" },
    { icon: MessageCircle, label: "My Doubts", href: "/dashboard/mydoubts" },
    { icon: Trophy, label: "Leaderboard", href: "/dashboard/leaderboard" },
    { icon: Gift, label: "Points & Rewards", href: "/dashboard/points" },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help & FAQ", href: "#" },
  ];
  const isActive = (href) => {
    return href === location.pathname;
  };

  return (
    <>
      <div className="fixed top-16 bottom-0 z-50 w-64 bg-primary border-r border-borderColor py-4 px-2 transition-transform duration-200 ease-in-out">
        <div className="h-full flex flex-col justify-between">
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {topMenuItems.map((item) => (
                <Link to={item.href}>
                  <button
                    key={item.label}
                    className={`flex gap-2 items-center w-full px-3 py-2 pt-4 text-black hover:bg-[#f0f5f9] rounded-md ${
                      isActive(item.href) ? "bg-[#ebf0fd]" : ""
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4 text-black" />
                    <span className="text-black text-sm">{item.label}</span>
                  </button>
                </Link>
              ))}
            </div>
          </ScrollArea>

          <div className="flex flex-col pt-4">
            {bottomMenuItems.map((item) => (
              <button
                key={item.label}
                className="flex gap-2 items-center w-full px-3 py-2 pt-4 text-black hover:bg-[#f0f5f9] rounded-md"
              >
                <item.icon className="mr-2 h-4 w-4 text-black" />
                <span className="text-black text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
