import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BotIcon, ClipboardCopyIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { useToast } from "./ui/use-toast";
import { Separator } from "./ui/separator";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [res, setRes] = useState("");
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  const generateRes = async () => {
    try {
      // replace with your api key 
      const genAI = new GoogleGenerativeAI("AIzaSyDJDBNiAqGMMkIyPdLLC7tueoa4TfLrUKc");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(query);

      const generatedResponse = await result.response.text(); 
      setRes(generatedResponse);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate the response. Please try again.",
        status: "error",
      });
      console.error("Error generating response:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(res).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "The response has been copied to your clipboard.",
        status: "success",
      });
    });
  };

  const renderResponse = (responseText) => {
    return responseText.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mb-2 text-white">
            {line.replace("# ", "")}
          </h2>
        );
      } else if (line.startsWith("**")) {
        return (
          <h2 key={index} className="text-2xl font-bold mb-2 text-white">
            {line.replace("** ", "")}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        return (
          <ul key={index} className="list-disc list-inside text-white mb-2 ml-6">
            <li>{line.replace("- ", "")}</li>
          </ul>
        );
      } else if (line.startsWith("1. ")) {
        return (
          <ol key={index} className="list-decimal list-inside text-white mb-2 ml-6">
            <li>{line.replace("1. ", "")}</li>
          </ol>
        );
      } else if (line.startsWith("```")) {
        return (
          <pre key={index} className="bg-gray-800 text-white p-4 rounded-lg mb-2">
            {line.replace(/```/g, "")}
          </pre>
        );
      } else {
        return (
          <p key={index} className="text-white mb-2">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div className="flex h-screen bg-[#1A1A1A]">
      {/* Sidebar */}
      <div className="bg-[#2D2D2D] w-1/4 p-4 text-white">
        <div className="flex items-center space-x-2 mb-6">
          <BotIcon className="text-white" />
          <h3 className="text-xl font-semibold">Food Dx Auto</h3>
        </div>

        <Separator className="bg-gray-500 mb-4" />

        <h4 className="mb-2 text-sm text-gray-400">Yesterday</h4>
        <div className="mb-4">
          <p className="p-2 bg-[#333333] rounded-lg">Cookie Handling in React</p>
        </div>

        <h4 className="mb-2 text-sm text-gray-400">Previous 7 Days</h4>
        <div className="flex flex-col space-y-2 overflow-y-auto h-[60vh] smooth-scrollbar">
          <p className="p-2 bg-[#333333] rounded-lg">Mobile Responsive Form Design</p>
          <p className="p-2 bg-[#333333] rounded-lg">MERN Stack 30 Day Journey</p>
          <p className="p-2 bg-[#333333] rounded-lg">SignUp API Integration</p>
          <p className="p-2 bg-[#333333] rounded-lg">Modernizing Services Component</p>
          <p className="p-2 bg-[#333333] rounded-lg">CORS Configuration Issue</p>
          <p className="p-2 bg-[#333333] rounded-lg">IoT Security Overview</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#2D88C5] to-[#85BADD]">
        <Card className="w-full max-w-3xl mx-auto p-6 rounded-xl bg-[#2D2D2D]  shadow-lg">
          <CardHeader className="flex items-center justify-center mb-6">
            <BotIcon className="mr-2 h-6 w-6 text-white" />
            <CardTitle className="text-3xl font-bold text-white">AI Chat Bot</CardTitle>
          </CardHeader>
          <Separator className="mb-6 bg-gray-500" />
          <CardContent>
            <Input
              placeholder="Message Food Dx"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full mb-6 p-4 text-lg bg-[#3D3D3D] text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              size="lg"
            />
            <Button
              onClick={generateRes}
              className="w-full py-3 mb-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg font-semibold rounded-lg text-white"
            >
              Generate Text
            </Button>
            {res && (
              <div className="">
                <div className="p-4 bg-[#333333] rounded-lg border border-gray-500 text-white max-h-96 overflow-auto">
                  {renderResponse(res)}
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={copyToClipboard}
                        className="absolute top-96 right-64 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                      >
                        <ClipboardCopyIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy to clipboard</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
