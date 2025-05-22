import { Button } from "../ui/button";
import Link from "next/link";

function EmptyList({
  heading = "",
  message = "",
  btnText = "Back Home",
  className = "",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
  className?: string;
}) {
  return (
    <div className={`mt-4 ${className}`}>
      <h2 className="text-xl font-bold mb-2">{heading}</h2>
      <p className="text-lg">{message}</p>
      <Button asChild className="mt-4 " size="lg">
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
}

export default EmptyList;
