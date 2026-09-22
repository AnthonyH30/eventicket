"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { ChevronDown, MapPin } from "lucide-react";

const options = [
  "Todos os Lugares",
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Brasília",
  "Salvador",
];

const SearchButton = () => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [filteredOptions, setFilteredOptions] = React.useState(options);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue),
    );
    setFilteredOptions(filtered);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white h-12 px-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MapPin /> {selectedOption} <ChevronDown />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white min-h-[300px]">
        <DialogHeader>
          <DialogTitle>Localização</DialogTitle>
          <Input placeholder="Onde?" onChange={handleInputChange} />
          <ul className="mt-2 space-y-1">
            {filteredOptions.map((option) => (
              <li key={option}>
                <DialogClose
                  className={`w-full bg-gray-100 text-left rounded-md ${selectedOption === option ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(!isOpen);
                  }}
                >
                  <Button variant="ghost">
                    <MapPin />
                    {option}
                  </Button>
                </DialogClose>
              </li>
            ))}
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchButton;
