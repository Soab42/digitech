import TitleWithBg from "@/app/components/Title";
import { services } from "@/app/db";
import React from "react";

export default function ServicePage({ params: { id } }) {
  const service = services?.find((service) => service.id === parseInt(id));
  return (
    <div>
      <TitleWithBg
        title={service.name}
        link={`/services/${id}`}
        name={service.name}
      />
    </div>
  );
}
