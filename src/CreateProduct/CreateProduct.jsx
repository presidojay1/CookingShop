import React from "react";

const CreateProduct = () => {
  return (
    <div className="">
      <div class="grid-cols-1   ">
        <div class="col-span-1 px-6 md:px-[91px] bg-white p-4">
          <p class="text-black font-semibold text-center md:text-start text-[24px] leading-8   ">
            Product details
          </p>

          <div className="border w-full h-[58px] border-black py-[4px] px-[16px] mt-7 rounded-xl">
            <p className="font-sf-pro text-[13px] font-normal leading-18px tracking--0.4px ">
              Product name
            </p>
            <input
              className="w-full  rounded-md focus:outline-none focus:none bg-transparent"
              placeholder="Enter product name"
            />
          </div>

          <div className="border w-full h-[163px] border-black py-[4px] px-[16px] mt-3 rounded-xl">
            <p className="font-sf-pro text-[13px] font-normal leading-18px tracking--0.4px ">
              Product description
            </p>
            <input
              className="w-full  rounded-md focus:outline-none focus:none bg-transparent"
              placeholder="Enter product description"
              type="text"
            />
          </div>

          <div className=" mt-3">
            <p className="font-medium text-[13px] md:text-[18px]">
              Media Upload
            </p>
            <p className="text-[10px] md:text-[14px] mt-1">
              Add your documents here, and you can upload up to 5 files max
            </p>
          </div>

          <div className="border w-full text-center h-[163px] border-dashed border-[#B6551C] py-[4px] px-[16px] mt-3 rounded-xl">
            <svg
              className="items-center mt-7 mx-auto justify-center "
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_520_926)">
                <path
                  d="M29.525 15.06C28.505 9.885 23.96 6 18.5 6C14.165 6 10.4 8.46 8.525 12.06C4.01 12.54 0.5 16.365 0.5 21C0.5 25.965 4.535 30 9.5 30H29C33.14 30 36.5 26.64 36.5 22.5C36.5 18.54 33.425 15.33 29.525 15.06ZM29 27H9.5C6.185 27 3.5 24.315 3.5 21C3.5 17.925 5.795 15.36 8.84 15.045L10.445 14.88L11.195 13.455C12.62 10.71 15.41 9 18.5 9C22.43 9 25.82 11.79 26.585 15.645L27.035 17.895L29.33 18.06C31.67 18.21 33.5 20.175 33.5 22.5C33.5 24.975 31.475 27 29 27ZM12.5 19.5H16.325V24H20.675V19.5H24.5L18.5 13.5L12.5 19.5Z"
                  fill="#B6551C"
                />
              </g>
              <defs>
                <clipPath id="clip0_520_926">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="font-sf-pro text-[10px] md:text-[13px] font-normal leading-18px tracking--0.4px ">
              Drag your file(s) or{" "}
              <span className="text-[#B6551C]">browse</span>
            </p>
            <p className="text-[7px]  md:text-[13px]">
              Max 10MB files are allowed
            </p>
          </div>

          <div className="border w-full h-[58px] border-black py-[4px] px-[16px] mt-3 rounded-xl">
            <p className="font-sf-pro text-[13px] font-normal leading-18px tracking--0.4px ">
              Amount
            </p>
            <input
              className="w-full  rounded-md focus:outline-none focus:none bg-transparent"
              placeholder="Enter your amount for the product"
            />
          </div>

          <div className="border w-full h-[58px] border-black py-[4px] px-[16px] mt-3 rounded-xl">
            <p className="font-sf-pro text-[13px] font-normal leading-18px tracking--0.4px ">
              Category
            </p>
            <input
              className="w-full  rounded-md focus:outline-none focus:none bg-transparent"
              placeholder="Enter your product or service"
            />
          </div>

          <div className="flex justify-end items-center w-[100%] mt-20 bg-[#F8FAFB] h-[100px]">
            <button className="text-white h-[58px] bg-[#B6551C] py-[4px] px-[120px] rounded-xl">
              Create product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
