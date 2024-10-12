import instance from ".";

const getAllPosts = async () => {
  const response = await instance.get("pets/");
  return response.data;
};

const getOnePost = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};

const createPost = async (name, type, image, adopted) => {
  const response = await instance.post("pets/", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });

  return response.data;
};

// New functions

// Get all pets
const getAllPets = () => {
  return instance.get("/pets");
};

// Get one pet by ID
const getPetById = (id) => {
  return instance.get(`/pets/${id}`);
};

// Create a new pet
const createPet = async (petData) => {
  try {
    const response = await instance.post("/pets", petData);
    return response.data;
  } catch (error) {
    console.error("Error creating new pet:", error);
    throw error;
  }
};

// Delete a pet
const deletePet = (id) => {
  return instance.delete(`/pets/${id}`);
};

export {
  getAllPosts,
  getOnePost,
  createPost,
  getAllPets,
  getPetById,
  createPet,
  deletePet,
};
