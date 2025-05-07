import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-8">
        create property
      </h1>

      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium capitalize">general info</h3>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
