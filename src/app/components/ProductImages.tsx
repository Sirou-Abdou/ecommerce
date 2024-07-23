"use client";
import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/14913583/pexels-photo-14913583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/27077981/pexels-photo-27077981/free-photo-of-nourriture-aliments-assiette-rouge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/26771132/pexels-photo-26771132/free-photo-of-homme-couple-femme-debout.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/25748615/pexels-photo-25748615/free-photo-of-lunettes-de-soleil-debout-portrait-porter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
      <div className="flex gap-4 justify-between mt-4">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
