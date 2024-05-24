import { SVGAttributes } from "react";

const Person = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <path
      d="M15 0C19.6599 0 23.4375 3.7776 23.4375 8.4375V10.3125C23.4375 11.7021 23.101 13.0135 22.506 14.1692C24.1734 14.8579 25.4443 16.3247 25.8495 18.1482L27.1227 23.8777C27.1658 24.0714 27.1875 24.2693 27.1875 24.4677V26.3427C27.1875 27.8448 25.9698 29.0625 24.4677 29.0625H5.53227C4.03018 29.0625 2.8125 27.8448 2.8125 26.3427V24.4677C2.8125 24.2693 2.83422 24.0714 2.87727 23.8777L4.15049 18.1482C4.55572 16.3247 5.82663 14.8579 7.49397 14.1692C6.89902 13.0135 6.5625 11.7021 6.5625 10.3125V8.4375C6.5625 3.7776 10.3401 0 15 0Z"
      fill="#4A5764"
    />
    <path
      d="M15 1.875C18.6244 1.875 21.5625 4.81313 21.5625 8.4375V10.3125C21.5625 12.3951 20.5924 14.2511 19.0795 15.4533L20.7726 15.6414C22.3664 15.8185 23.6713 16.9895 24.0192 18.555L25.2924 24.2845C25.3058 24.3446 25.3125 24.4061 25.3125 24.4677V26.3427C25.3125 26.8093 24.9343 27.1875 24.4677 27.1875H5.53227C5.06571 27.1875 4.6875 26.8093 4.6875 26.3427V24.4677C4.6875 24.4061 4.69425 24.3446 4.70762 24.2845L5.98084 18.555C6.32872 16.9895 7.63357 15.8185 9.22742 15.6414L10.9205 15.4533C9.40758 14.2511 8.4375 12.3951 8.4375 10.3125V8.4375C8.4375 4.81313 11.3756 1.875 15 1.875Z"
      fill="#3B7DF7"
    />
    <path
      d="M9.22742 15.6414C7.63357 15.8185 6.32872 16.9895 5.98084 18.555L4.70762 24.2845C4.69425 24.3446 4.6875 24.4061 4.6875 24.4677V26.3427C4.6875 26.8093 5.06571 27.1875 5.53227 27.1875H24.4677C24.9343 27.1875 25.3125 26.8093 25.3125 26.3427V24.4677C25.3125 24.4061 25.3058 24.3446 25.2924 24.2845L24.0192 18.555C23.6713 16.9895 22.3664 15.8185 20.7726 15.6414L15 15L9.22742 15.6414Z"
      fill="#7E8FA0"
    />
    <path
      d="M5.98084 18.555C6.32872 16.9895 7.63357 15.8185 9.22742 15.6414L15 15L20.7726 15.6414C22.3664 15.8185 23.6713 16.9895 24.0192 18.555L25.2924 24.2845C25.3058 24.3446 25.3125 24.4061 25.3125 24.4677C25.3125 24.9343 24.9343 25.3125 24.4677 25.3125H5.53227C5.06571 25.3125 4.6875 24.9343 4.6875 24.4677C4.6875 24.4061 4.69425 24.3446 4.70762 24.2845L5.98084 18.555Z"
      fill="url(#paint0_linear_5_14)"
    />
    <path
      d="M21.5625 8.4375C21.5625 4.81313 18.6244 1.875 15 1.875C11.3756 1.875 8.4375 4.81313 8.4375 8.4375V10.3125C8.4375 13.9369 11.3756 16.875 15 16.875C18.6244 16.875 21.5625 13.9369 21.5625 10.3125V8.4375Z"
      fill="#3B7DF7"
    />
    <circle cx="15" cy="8.4375" r="6.5625" fill="url(#paint1_linear_5_14)" />
    <defs>
      <linearGradient
        id="paint0_linear_5_14"
        x1="15"
        y1="15"
        x2="15"
        y2="25.3125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#E2E5E9" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5_14"
        x1="15"
        y1="1.875"
        x2="15"
        y2="15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C6DBFF" />
        <stop offset="1" stopColor="#73A5FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Person;
