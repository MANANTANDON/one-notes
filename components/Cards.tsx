// import Image from "next/image";
// import logo from "./Assets/logo two.png";

export const Cards = () => {
  const array = [
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0005.jpg?w=573&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0010.jpg?w=586&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0005.jpg?w=573&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0010.jpg?w=586&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0005.jpg?w=573&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0010.jpg?w=586&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0005.jpg?w=573&ssl=1",
    "https://i0.wp.com/www.aureolls.com/wp-content/uploads/2022/07/IMG-20220727-WA0010.jpg?w=586&ssl=1",
  ];
  return (
    <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:grid-cols-4 mt-16 py-10 px-3">
      {array.map((item) => (
        <figure className="relative transition-all duration-300 cursor-pointer ">
          <a href="#">
            <img className="rounded-lg" src={item} alt="image description" />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-0 rounded-lg p-6 bg-black/70 backdrop-blur-lg">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
