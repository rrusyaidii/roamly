"use client";
import { useState } from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/form/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";

function SubmitReview({ propertyId }: { propertyId: string }) {
  const [isReviewFormVisible, setisReviewFormVisible] = useState(false);

  return (
    <div className="mt-8">
      <Button
        onClick={() => {
          setisReviewFormVisible((prev) => !prev);
        }}
      >
        Leave a review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="propertyId" value={propertyId} />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="your thoughts on this property"
              defaultValue="Wonderful stay! The property was spotless and well-maintained. The host was friendly and responsive, and check-in was smooth. The location was convenient, and the space felt cozy and comfortable. Would definitely stay here again!"
            />
            <SubmitButton text="Submit" className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
