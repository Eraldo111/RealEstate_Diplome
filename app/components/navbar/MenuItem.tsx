'use client';

import { IconType } from "react-icons";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  icon: Icon,
}) => {
  return ( 
    <div 
      onClick={onClick} 
      className="
      flex
      flex-row
      items-center
      gap-2
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
      "
    >
      <Icon size={16} />
      {label}
    </div>
   );
}
 
export default MenuItem;