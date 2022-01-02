import BellIcon from "./Bell";

const ICONS = {
  Bell: <BellIcon />,
};

export default function Icon ({ type }) {
  return ICONS[type];
};
