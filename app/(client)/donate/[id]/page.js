import React from "react";
import MyImageGallery from "../components/my-gallery";
import Descriptions from "../components/my-description";
import { ShoppingCart } from "lucide-react";

const page = async () => {
                
    const description = 'At ECC we are proud to support local communities with clean water projects. Quite often families have to walk quite a distance just to have access to clean water. With your help we could help improve many families lives. Clean water is often something many of us take for granted.';
 
    return (
    <section className="px-2 mx-auto my-10 max-w-screen-2xl xl:px-20 ">
      {/* <MyBreadCrumb result={result?.title} /> */}
      <div className="mt-3">
        <div className="flex flex-col grid-cols-12 gap-12 sm:grid">
          <div className="sm:col-span-12 md:col-span-5">
            <MyImageGallery
            // photos={[`${IMAGE_PRODUCT_URL}${result?.image}`, ...images]}
            />
          </div>

          <div className=" sm:col-span-12 md:col-span-7 text-blue xl:ml-5">
            <div>
              <p className="text-lg font-semibold md:text-4xl">
                Clean Water Project
              </p>
              <p className="text-lg font-semibold md:text-4xl text-[#34448c] mt-4">
                $ 100
              </p>
            </div>
            <div className="mt-5">
              {/* <input
                type="number"
                defaultValue={1}
                placeholder="Your Name"
                className="px-4 py-3 border mr-5 max-w-20 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34448c]"
              /> */}
              <a href="https://pay.ababank.com/b298MbASsZAmH21U8" className="flex items-center justify-center px-4 text-[10px] sm:text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
                Donate
              </a>
            </div>
            <Descriptions description={description}/>
          </div>
        </div>
        {/* Content utttom */}
        {/* {result?.description && (
            <Descriptions description={result?.description} />
          )} */}
        {/*End Content utttom */}
      </div>
      {/* <div className="flex items-center justify-between w-full pb-0 mt-5 mb-8 border-b-2 hover:no-underline border-blue-bold"></div> */}
    </section>
  );
};

export default page;
