"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";

function Description({ description }: { description: string }) {
  const [isFullDescriptionShown, setisFullDescriptionShown] = useState(false);
  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setisFullDescriptionShown(!isFullDescriptionShown);
  };

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 80).join(" ") + "..."
      : description;

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button onClick={toggleDescription} variant="link" className="pl-0">
          {isFullDescriptionShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}

export default Description;
