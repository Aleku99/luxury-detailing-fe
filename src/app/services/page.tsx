import noServicesPng from "../../../public/assets/no-services.png";
import Image from "next/image";

const getServices = async () => {
  const url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/services`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    const services = await res.json();
    return services.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const Services = async () => {
  const services = await getServices();

  if (services.length > 0) {
    return (
      <div className="services-page-background">
        <div className="min-h-[100vh] p-8 bg-black bg-opacity-80 flex flex-col justify-start items-center ">
          <div className="grid grid-cols-2 gap-x-[10vw] text-white mt-16">
            <h1 className="text-2xl text-center">Proces</h1>
            <h1 className="text-2xl text-center">Preț (RON)</h1>
            {services.map((service: any, index: number) => (
              <>
                <h2
                  className={`text-2xl text-center mt-4 ${
                    index === services.length - 1 ? "mb-48" : "mb-4"
                  }`}
                >
                  {service.attributes.name}
                </h2>
                <h2
                  className={`text-xl text-center mt-4 ${
                    index === services.length - 1 ? "mb-48" : "mb-4"
                  }`}
                >
                  {service.attributes.price}
                </h2>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="services-page-background">
        <div className="min-h-[100vh] p-8 bg-black bg-opacity-80 flex flex-col justify-center items-center">
          <h2 className="text-2xl text-white text-shadow text-center">
            Ooops! Momentan nu sunt servicii de afișat.
          </h2>
          <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-32 mb-48 ">
            <Image
              className="invert"
              src={noServicesPng}
              alt="No services image"
              fill
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Services;
