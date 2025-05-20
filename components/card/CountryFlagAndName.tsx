import { findCountryByCode } from "@/utils/countries";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode);
  const countryName =
    validCountry!.name.length > 15
      ? `${validCountry!.name.substring(0, 15)}...`
      : validCountry?.name;

  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      {validCountry?.flag} {countryName}
    </span>
  );
}

export default CountryFlagAndName;
