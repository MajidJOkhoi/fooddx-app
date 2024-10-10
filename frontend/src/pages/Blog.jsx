import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiImage from "../assets/blog0.jpg"; 
import aiImage1 from "../assets/blog-1.jpg"; 
import aiImage2 from "../assets/blog-2.jpg"; 
import aiImage3 from "../assets/robot.avif"; 
import aiImage4 from "../assets/blog-3.jpg"; 
import aiImage5 from "../assets/blog-4.jpg"; 


// Sample Blog Data Array
const blogPosts = [
  {
    id: 1,
    title: "Importance of Staying Hydrated",
    description:
      "Drinking enough water daily is crucial for overall health, aiding in digestion, circulation, and maintaining body temperature.",
    content:
      "Staying hydrated is essential for health and wellbeing, yet many people do not consume enough fluids each day. Water is the best way to stay hydrated because it is calorie-free, inexpensive, and readily available. Drinking enough water helps maintain the balance of body fluids, energizes muscles, keeps skin looking good, and helps your kidneys in detoxification processes.",
    imageUrl: aiImage,
  },
  {
    id: 2,
    title: "Benefits of a Balanced Diet",
    description:
      "A balanced diet provides essential nutrients and helps prevent chronic diseases, maintaining overall health and vitality.",
    content:
      "A balanced diet is one that provides your body with all the essential nutrients, vitamins, and minerals it needs to function correctly. Eating a variety of foods and consuming less salt, sugars, and saturated and industrially-produced trans-fats, are essential for a healthy diet. Include a mix of fruits, vegetables, nuts, seeds, whole grains, and healthy fats to ensure your body gets what it needs.",
    imageUrl: aiImage1,
  },
  {
    id: 3,
    title: "The Power of Regular Exercise",
    description:
      "Regular exercise can help prevent heart disease, improve mental health, and promote overall well-being.",
    content:
      "Regular exercise is one of the most effective ways to improve your mental and physical health. It helps to reduce the risk of developing heart disease, strengthens bones and muscles, improves brain health, and helps manage weight. Aim for at least 150 minutes of moderate-intensity aerobic activity each week, combined with muscle-strengthening activities on two or more days a week.",
    imageUrl: aiImage2,
  },
  {
    id: 4,
    title: "Getting Enough Quality Sleep",
    description:
      "Sleep is essential for good health, affecting mental clarity, mood, and overall physical health.",
    content:
      "Quality sleep is vital for maintaining overall health and well-being. Lack of sleep affects not only how you feel the next day but can also have a negative impact on your memory, mood, and mental health. Adults should aim for 7-9 hours of sleep per night. Developing a bedtime routine, creating a sleep-friendly environment, and avoiding caffeine late in the day can improve sleep quality.",
    imageUrl: aiImage3,
  },
  {
    id: 5,
    title: "Mindfulness and Stress Management",
    description:
      "Practicing mindfulness can reduce stress, improve focus, and promote emotional well-being.",
    content:
      "Mindfulness involves paying full attention to the present moment without judgment. It can significantly help in reducing stress and improving focus and emotional well-being. Techniques like meditation, deep breathing exercises, yoga, and progressive muscle relaxation can be integrated into your daily routine to help manage stress effectively.",
    imageUrl: aiImage4,
  },
  {
    id: 6,
    title: "Regular Health Checkups",
    description:
      "Routine health checkups can help detect potential health issues early and prevent complications.",
    content:
      "Regular health checkups are important to ensure that you stay on top of your health. They can help identify potential health issues before they become a problem, giving you the chance to get early treatment and prevent complications. Make sure to discuss with your healthcare provider which checkups are necessary based on your age, gender, family history, and lifestyle choices.",
    imageUrl: aiImage5,
  },
];


const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null); 

  const handleReadMore = (post) => {
    setSelectedPost(post); 
  };

  const handleBackToList = () => {
    setSelectedPost(null); 
  };

  return (
    <div className="container mx-auto py-10 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8"> Blog About Food Dx </h1>
      {/* Conditionally Render Blog Cards or Single Post Content */}
      {selectedPost ? (
        // Display Detailed Blog Content
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
          <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-64 object-cover mb-4 rounded-md" />
          <p className="text-gray-700">{selectedPost.content}</p>
          <Button onClick={handleBackToList} className="mt-6 bg-blue-600 text-white">
            Back to Blog List
          </Button>
        </div>
      ) : (
        // Display Blog Cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#0170B9]  border border-gray-200">
              <CardHeader className="p-0">
                <img src={post.imageUrl} alt={post.title} className="w-full bg-white h-52 object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold text-center text-white">{post.title}</CardTitle>
                <p className="text-sm text-center text-white mt-2">{post.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                <Button onClick={() => handleReadMore(post)} className="bg-blue-600 border-2 border-white text-white px-4 py-2 rounded-md hover:bg-blue-700">

                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
