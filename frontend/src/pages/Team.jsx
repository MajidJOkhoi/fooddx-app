import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamMember1 from "../assets/razzaque.png";
import teamMember2 from "../assets/majid.png";
import teamMember3 from "../assets/zeshu.png";

// Team Members Data
const teamMembers = [
  {
    id: 1,
    name: "Abdul Razzaque",
    role: "Data Scientist",
    description:
      "I am an AI Engineer at xFlow research Inc. Passionate about pushing the boundaries of Generative AI, Image Processing, and NLP.",
    imageUrl: teamMember1,
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Majid Ali Jokhio",
    role: "Web Engineer",
    description:
      "Majid Ali, a Web Engineer, adeptly designs and develops high-performance web applications, specializing in UI/UX.",
    imageUrl: teamMember2,
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Zeeshan Rajpur",
    role: "Backend Developer",
    description:
      "Zeeshan Ali, a Backend Developer, excels in designing robust and scalable web applications with a focus on performance.",
    imageUrl: teamMember3,
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
];

const Team = () => {
  const [selectedmember, setSelectedmember] = React.useState(null);

 

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Team Members </h1>

      {/* Team Section */}
      {selectedmember ? (
        // Display Detailed Team Member Content
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{selectedmember.name}</h2>
          <img
            src={selectedmember.imageUrl}
            alt={selectedmember.name}
            className="w-full h-72   "
          />
          <p className="text-gray-700">{selectedmember.description}</p>
         
        </div>
      ) : (
        // Display Team Member Cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#0170B9] border border-gray-200">
              <CardHeader className="p-0">
              <img 
  src={member.imageUrl} 
  alt={member.name} 
  className="w-full h-52 md:h-64 object-cover rounded-lg bg-white" 
/>

              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold text-center text-white">{member.name}</CardTitle>
                <p className="text-sm text-center text-white mt-2">{member.role}</p>
                <p className="text-sm text-center text-white mt-2">{member.description}</p>
              </CardContent>
              
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
