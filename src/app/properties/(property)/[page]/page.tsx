'use client'

import { Error404 } from "@/components/Error404";
import { dataProperties } from "@/components/Properties/Properties.data";
import { Property } from "@/components/Property";
import { TransitionPage } from "@/components/TransitionPage";
import { useParams } from "next/navigation"

export default function Page() {
  const router = useParams();
  const propertyId = router.page;
  const filteredPage = dataProperties.find(property => property.id === Number(propertyId));

  return (
    <>
      <TransitionPage />
      {filteredPage
        ? <Property house={filteredPage} /> 
        : <Error404 />
      }
    </>
  )
}
