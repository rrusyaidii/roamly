import FormContainer from "@/components/form/FormContainer";
import { updateProfileAction, fetchProfile } from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";

async function ProfilePage() {
  const profile = await fetchProfile();
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
    </section>
  );
}
export default ProfilePage;
