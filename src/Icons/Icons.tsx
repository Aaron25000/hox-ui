interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

export const CloseIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "24px"}
      viewBox="0 -960 960 960"
      width={width || "24px"}
      fill={color || "currentColor"}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  );
};

export const ProfileIcon = ({ width, height, color}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "24px"}
      viewBox="0 -960 960 960"
      width={width || "24px"}
      fill={color || "currentColor"}
    >
      <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/>
    </svg>
  );
};

export const PeopleIcon = ({ width, height, color}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "24px"}
      viewBox="0 -960 960 960"
      width={width || "24px"}
      fill={color || "currentColor"}
    >
      <path d="M360-80v-529q-91-24-145.5-100.5T160-880h80q0 83 53.5 141.5T430-680h100q30 0 56 11t47 32l181 181-56 56-158-158v478h-80v-240h-80v240h-80Zm63.5-663.5Q400-767 400-800t23.5-56.5Q447-880 480-880t56.5 23.5Q560-833 560-800t-23.5 56.5Q513-720 480-720t-56.5-23.5Z"/>
    </svg>
  )
};

export const EditIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      height={height || "24px"}
      viewBox="0 -960 960 960"
      width={width || "24px"} 
      fill={color ||"currentColor"}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
    </svg>
  );
};

export const ReportIcon = ({ width, height, color}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "24px"}
      viewBox="0 -960 960 960"
      width={width ||"24px"}
      fill={color || "currentColor"}
    >
      <path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/>
    </svg>
  );
};

export const SearchIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "24px"}
      viewBox="0 -960 960 960"
      width={width || "24px"}
      fill={color || "currentColor"}
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </svg>
  );
};