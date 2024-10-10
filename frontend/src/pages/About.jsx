import { Badge } from "@/components/ui/badge";
import { FaFileMedical, FaCamera, FaBrain, FaMicroscope } from "react-icons/fa";
import img1 from "../assets/img1.jpg";

const About = () => {
  return (
    <section className="py-10" id="about">
      {/* About Us Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className=" w-full h-[500px] max-h-screen rounded-lg overflow-hidden shadow-lg">
            <img
              src={img1}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-full">
            <div className="mb-6">
              <Badge className=" rounded-3xl py-3 px-5 border-2 bg-[#0071bd] text-white font-bold">About Us</Badge>
              <h1 className="text-4xl font-bold mt-4">
                Precision Health At Your Fingertips
              </h1>
            </div>
            <p className="text-lg text-gray-700">
              Welcome to Food Dx Health Partner, where personalized healthcare
              meets the convenience of modern technology. Our innovative Food Dx
              app revolutionizes the way you approach your well-being by
              offering tailored solutions for your unique health needs.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              With Food Dx, you embark on a journey of personalized nutrition
              and wellness, guided by advanced AI algorithms and expert
              insights.
            </p>

            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">
                Precision Health Steps
              </h2>

              {/* Health Steps */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Data Health */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-6 rounded-full shadow-md">
                    <FaFileMedical className="text-blue-500 text-3xl" />
                  </div>
                  <h6 className="text-lg mt-4 font-semibold">Data</h6>
                  <small className="text-blue-500">Health Data</small>
                </div>

                {/* Scan Image */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-6 rounded-full shadow-md">
                    <FaCamera className="text-blue-500 text-3xl" />
                  </div>
                  <h6 className="text-lg mt-4 font-semibold">Scan</h6>
                  <small className="text-blue-500">Image</small>
                </div>

                {/* Model Training */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-6 rounded-full shadow-md">
                    <FaBrain className="text-blue-500 text-3xl" />
                  </div>
                  <h6 className="text-lg mt-4 font-semibold">Model</h6>
                  <small className="text-blue-500">Train</small>
                </div>

                {/* Accurate Results */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-6 rounded-full shadow-md">
                    <FaMicroscope className="text-blue-500 text-3xl" />
                  </div>
                  <h6 className="text-lg mt-4 font-semibold">Accurate</h6>
                  <small className="text-blue-500">Result</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
