"use client";
import { setManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: setManufacturerProps) => {
  const [quary, setQuary] = useState("");

  const fillterManufacturers =
    quary === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(quary.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="logo car"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="VolksWagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuary(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuary("")}
          >
            <Combobox.Options>
              {fillterManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
