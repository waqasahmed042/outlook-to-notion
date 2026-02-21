import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import not_found from "@/assets/404.gif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <img src={not_found} alt="404 Not Found" className="h-72 w-72" />

        <Link
          to="/"
          className="gradient-primary inline-flex cursor-pointer items-center gap-2 mt-8 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-primary/25"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
