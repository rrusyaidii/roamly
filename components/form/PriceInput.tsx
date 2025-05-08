import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Prisma } from "@prisma/client";

// const name = Prisma.PropertyScalarFieldEnum.price;
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  const name = "price";
  return (
    <div>
      <Label htmlFor="price" className="captialize">
        Price (RM)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
