import React, { useState } from "react";

interface LocationData {
  location: string;
  category: string;
  title: string;
  duration: string;
  price: string;
  imgs: string[];
  highlights: string;
  description: string;
}

const PostLocationForm: React.FC = () => {
  const [formData, setFormData] = useState<LocationData>({
    location: "",
    category: "",
    title: "",
    duration: "",
    price: "",
    imgs: [],
    highlights: "",
    description: "",
  });
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      alert(JSON.stringify(formData));
      const response = await fetch("http://localhost:4000/api/locations/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({
        location: "",
        category: "",
        title: "",
        duration: "",
        price: "",
        imgs: [],
        highlights: "",
        description: "",
      });
      if (response.ok) {
        // Handle success

        console.log("Data posted successfully!");
      } else {
        // Handle error
        console.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className='container mx-auto p-8 max-w-2xl'>
      <h2 className='text-2xl font-bold mb-8'>Post Location</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-semibold mb-1'>Location:</label>
          <input
            type='text'
            name='location'
            value={formData.location}
            onChange={(e) => {
              setFormData({ ...formData, location: e.target.value });
              setImg1("");
              setImg2("");
              setImg3("");
              setImg4("");
            }}
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Category:</label>
          <input
            type='text'
            name='category'
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Title:</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Duration:</label>
          <input
            type='text'
            name='duration'
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Price:</label>
          <input
            type='text'
            name='price'
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold mb-1'>Image:</label>
          <input
            type='text'
            value={img1}
            onChange={(e) =>
              setFormData({
                ...formData,
                imgs: [...formData.imgs, e.target.value],
              })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Image:</label>
          <input
            type='text'
            value={img2}
            onChange={(e) =>
              setFormData({
                ...formData,
                imgs: [...formData.imgs, e.target.value],
              })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Image:</label>
          <input
            type='text'
            value={img3}
            onChange={(e) =>
              setFormData({
                ...formData,
                imgs: [...formData.imgs, e.target.value],
              })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Image:</label>
          <input
            type='text'
            value={img4}
            onChange={(e) =>
              setFormData({
                ...formData,
                imgs: [...formData.imgs, e.target.value],
              })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold mb-1'>
            Highlights (comma-separated):
          </label>
          <input
            type='text'
            name='highlights'
            value={formData.highlights}
            onChange={(e) =>
              setFormData({
                ...formData,
                highlights: e.target.value,
              })
            }
            className='form-input w-full border border-gray-300 rounded-md py-2 px-3'
          />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>
            Description:
          </label>
          <textarea
            name='description'
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className='form-textarea w-full border border-gray-300 rounded-md py-2 px-3'
          ></textarea>
        </div>
        <div>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostLocationForm;
