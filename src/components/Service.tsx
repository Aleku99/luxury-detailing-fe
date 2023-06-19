import { Package } from "@/lib/services";

export const Service = ({ title, services, price }: Package): JSX.Element => {
  return (
    <div className="w-[40vw] rounded-xl  text-white flex flex-col gap-2 justify-start items-start ">
      <h1 className="text-2xl">{title}</h1>
      {services.map((service, index) => {
        return (
          <div key={index} className="flex flex-col justify-start items-start">
            <h2 className="text-lg">{service.description}</h2>
            <ul>
              {service.operations?.map((op, c) => (
                <li key={index}>-{op}</li>
              ))}
            </ul>
          </div>
        );
      })}
      <h3 className="text-lg">Pret {price}</h3>
    </div>
  );
};
