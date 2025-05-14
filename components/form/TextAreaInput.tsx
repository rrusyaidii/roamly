import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const tempDefaultDescription =
  "Glamping in Malaysian style in a cozy A-frame tent nestled in a peaceful kampung orchard. Enjoy air-conditioning, a comfy queen bed, TV, Wi-Fi, and breathtaking views of nature. Located near Sungai Selangor and lush rainforest trails. Kayaks available for river adventures. Shared bathhouse, fire pit, kitchenette, and fresh eggs from free-roaming hens. Unwind with the sounds of nature—roosters, ducks, and friendly local dogs roam the area. The space is perfect for rest and reflection. Fruit trees bloom in spring and bear fruit in late year. Visit our small farm shop for local produce and handmade goods. No pets allowed, thank you.";

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="name" className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}

export default TextAreaInput;
