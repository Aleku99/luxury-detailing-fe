import noServicesPng from "../../../public/assets/no-services.png";
import Image from "next/image";
import { services } from "@/lib/services";
import { Service } from "@/components/Service";

const Services = () => {
  if (services.length > 0) {
    return (
      <div className="services-page-background">
        <div className="min-h-[100vh] p-8 bg-black bg-opacity-80 flex flex-col justify-start items-center ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 py-32">
            {services.map((service, index) => (
              <Service
                key={index}
                title={service.title}
                services={service.services}
                price={service.price}
              />
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
              alt="Nu sunt servicii de afisat"
              fill
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Services;
