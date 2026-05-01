import { Link } from "react-router-dom";

const variants = {
  primary: "bg-signal text-white hover:bg-ink",
  dark: "bg-ink text-white hover:bg-graphite",
  light: "border border-line bg-white text-ink hover:border-ink",
};

export function ButtonLink({ children, href, to, variant = "primary", className = "", ...props }) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
