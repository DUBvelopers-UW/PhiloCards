import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {};

  return (
    <Link href={href}>
      <a className={router.asPath === href ? "active" : ""} style={style}>
        {children}
        <style jsx>{`
          .active {
            text-decoration: underline;
            text-decoration-thickness: 3px;
            text-underline-offset: 0.5rem;
          }
        `}</style>
      </a>
    </Link>
  );
}

export default ActiveLink;
