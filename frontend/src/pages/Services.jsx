import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
      title: "Healthy Tips",
      points: ["Stay Hydrated", "Balanced Nutrition", "Regular Exercise", "Adequate Sleep", "Hand Hygiene"],
      description:
        "I recommend maintaining hydration, balanced nutrition, regular exercise, ample sleep, and meticulous hand hygiene for optimal health.",
    },
    {
      title: "Types of Allergies",
      points: ["Food Allergy", "Skin Allergy", "Dust Allergies", "Drug Allergies", "Eye Allergy"],
      description:
        "Recognizing these allergies empowers individuals to seek appropriate treatment and adopt preventive measures for enhanced quality of life.",
    },
    {
      title: "Types of Allergies",
      points: ["Food Allergy", "Skin Allergy", "Dust Allergies", "Drug Allergies", "Eye Allergy"],
      description:
        "Recognizing these allergies empowers individuals to seek appropriate treatment and adopt preventive measures for enhanced quality of life.",
    },
    {
      title: "Allergy Symptoms",
      points: ["Cough", "Rashes", "Fatigue", "Rashes", "Runny Nose"],
      description:
        "Recognizing these symptoms enables prompt identification and management of allergic reactions, facilitating improved quality of life and well-being.",
    },
  ];
const Services = () => {
  return (
    <section className="bg-white py-10" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6"> Food Dx AI Beneficial Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#0071BD] p-6 rounded-lg text-center text-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
              </CardHeader>

              <ul className="list-disc list-inside text-left text-white  mb-4">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
