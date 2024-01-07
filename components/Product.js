import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Product() {
const [redirect,setRedirect] = useState(false)
const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImages] = useState([]);
  async function createProduct(ev) {
    ev.preventDefault();

    const data = { title, description, price };
    await axios.post(`/api/products`, data);

    setRedirect(true)
  }

  async function uploadImages(ev) {
    
  }

  if(redirect) {
    router.push('/products')
    return null
  }
  return (
    <form onSubmit={ev=>createProduct(ev)} className="mx-auto max-w-screen-sm">
      <>
        <div className="mx-auto my-4">
          <div>
            <label
              htmlFor="UserEmail"
              className="block text-lg font-medium text-gray-700"
            >
              {" "}
              Title{" "}
            </label>

            <input
              type="text"
              id="UserEmail"
              placeholder="Product title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mx-auto my-4">
          <div>
            <label
              htmlFor="UserEmail"
              className="block text-lg font-medium text-gray-700"
            >
              {" "}
              Category{" "}
            </label>

            <select
              type="text"
              id="ProductCategory"
              // onChange={(ev) => setTitle(ev.target.value)}
              placeholder="Select category"
              className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
            >
              <option value="">No category selected</option>
              <option value="">Option02</option>
              <option value="">Option03</option>
            </select>
          </div>
        </div>
        {/* images */}
        <div className="mx-auto my-4">
          <div class="mx-auto">
            <label
              htmlFor="UserEmail"
              className="block text-lg font-medium text-gray-700"
            >
              {" "}
              Images{" "}
            </label>
            <label class="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
              <div class="space-y-1 text-center">
                <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <div class="text-gray-600">
                  <a
                    href="#"
                    class="font-medium text-primary-500 hover:text-primary-700"
                  >
                    Click to upload
                  </a>{" "}
                  or drag and drop
                </div>
                <p class="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input id="example5" type="file" class="sr-only" multiple accept="image/*" onChange={uploadImages} />
            </label>
          </div>
        </div>
        <div className="mx-auto my-4">
          <div>
            <label
              htmlFor="UserEmail"
              className="block text-lg font-medium text-gray-700"
            >
              {" "}
              Description{" "}
            </label>

            <textarea
              rows={5}
              type="text"
              id="UserEmail"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder="Product description"
              className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mx-auto my-4">
          <div>
            <label
              htmlFor="UserEmail"
              className="block text-lg font-medium text-gray-700"
            >
              {" "}
              Price{" "}
            </label>

            <input
              type="number"
              id="ProductPrice"
              placeholder="Product price"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
              className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-center mx-auto my-8">
          <button className="inline-block rounded border border-indigo-600  px-12 py-3 text-sm font-medium text-indigo-600 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            Save Product
          </button>
        </div>
      </>
    </form>
  );
}
