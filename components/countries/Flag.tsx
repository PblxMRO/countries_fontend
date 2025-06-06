"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

type FlagProps = {
  countryCode: string
}

const FlagComponent = ({countryCode} : FlagProps) => {
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const flagImageUrl = `${process.env.NEXT_PUBLIC_API_URL2}/${countryCode}/flat/64.png`; 
        setFlagUrl(flagImageUrl);
      } catch (error) {
        console.error("Error al obtener la bandera:", error);
      }
    };

    fetchFlag();
  }, []);

  return (
    <div>
      {flagUrl ? (
        <Image
        src={flagUrl}
        alt="Bandera"
        width={100}
        height={40}
        loading="lazy"
      />
      ) : (
        <p>Cargando bandera...</p>
      )}
    </div>
  );
};

export default FlagComponent;