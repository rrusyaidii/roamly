import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import { Suspense } from "react";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import EmptyList from "@/components/home/EmptyList";

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const hasFilters = !!searchParams?.category || !!searchParams?.search;

  return (
    <section>
      <CategoriesList
        category={searchParams?.category}
        search={searchParams?.search}
      />
      {hasFilters && <EmptyList btnText="Clear Filters" className="pb-3" />}

      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams?.category}
          search={searchParams?.search}
        />
      </Suspense>
    </section>
  );
}
export default HomePage;
