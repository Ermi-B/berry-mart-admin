import Product from "@/components/Product";

export default function NewProduct() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
              Create a new product
              <span className="text-green-700"></span>
            </h1>

            <p className="mt-1.5 text-md text-gray-500">
              Let&apos;s create a new product!
            </p>
          </div>
        </div>
      </div>
      <hr class="h-px border-0 bg-gray-300" />
      <div className="my-10">
        <Product />
      </div>
    </>
  );
}
