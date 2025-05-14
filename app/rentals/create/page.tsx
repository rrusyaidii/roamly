import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";
import CounterInput from "@/components/form/CounterInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-8">
        create property
      </h1>

      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium capitalize">general info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Malaysia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Cheap houses here"
            />
            {/* price */}
            <PriceInput />
            {/* categories */}
            <CategoriesInput />
          </div>
          {/* description input */}
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000 Words)'"
          />
          {/* countries input */}
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput />
          </div>
          {/* accomodation details */}
          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accomodation Details
          </h3>
          <CounterInput detail="guest" />
          <CounterInput detail="bedroom" />
          <CounterInput detail="beds" />
          <CounterInput detail="bath" />

          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
