import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchFavorites();
  if (favorites.length === 0) {
    return (
      <EmptyList
        heading="No items in the list."
        message="Keep exploring our properties."
      />
    );
  }
  return <PropertiesList properties={favorites} />;
}
export default FavoritesPage;
