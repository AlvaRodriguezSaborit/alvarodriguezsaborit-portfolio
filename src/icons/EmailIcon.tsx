export default function EmailIcon({
  className = "size-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="2 4 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 7l6.2 4.65c1.0667.8 2.5333.8 3.6 0L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
