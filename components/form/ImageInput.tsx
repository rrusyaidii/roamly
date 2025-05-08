"use client";
import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function ImageInput() {
  const name = "image";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file selected");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file selected");
    }
  };

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-1 block">
        Image
      </Label>
      <div className="flex items-center gap-4">
        <Button type="button" onClick={handleClick} variant="outline">
          Upload Image
        </Button>
        <span className="text-sm text-muted-foreground">{fileName}</span>
      </div>
      <Input
        ref={fileInputRef}
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageInput;
