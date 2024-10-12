import React, { useState, useSyncExternalStore } from "react";
import petsData from "../petsData";
import PetItem from "./PetItem";
import Modal from "./Modal";
import { getAllPets } from "../API/pets"; // Import the API function

const PetList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pets, setPets] = useState(petsData); // Initialize with petsData, will be updated from API

  const handleGetAllPets = async () => {
    try {
      const response = await getAllPets();
      setPets(response.data); // Update pets with data from API
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const petList = pets
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <>
      <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
        <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-[70%] flex justify-start items-center border border-black rounded-md"
          />
          <button
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add pet
          </button>
        </div>
        <button
          className="mb-[20px] px-3 py-2 rounded-md text-sm md:text-xl border border-black flex justify-center items-center bg-blue-400 hover:bg-blue-600"
          onClick={handleGetAllPets}
        >
          Get All Pets
        </button>
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {petList}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PetList;
