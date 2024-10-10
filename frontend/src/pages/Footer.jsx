import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10 bg-[#0071bd]">
      <div className="container mx-auto flex flex-col md:flex-row  gap-10">
        {/* Contact Section */}
        <div className="flex flex-col md:w-1/4 ">
          <h4 className="text-white text-lg font-semibold border-b-4 border-secondary mb-4">
            Get In Touch
          </h4>
          <p className="mb-4 text-white">
            "Reach out and connect with us today to explore how we can help you
            achieve your health and wellness goals."
          </p>
          <p className="mb-2 flex items-center text-white">
            <i className="fa fa-envelope mr-3"></i>majidalijkhio@gmail.com
          </p>
          <p className="mb-0 flex items-center text-white">
            <i className="fa fa-phone-alt text-white mr-3"></i>+923093108513
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col md:w-1/4">
          <h4 className="text-white text-lg font-semibold border-b-4 border-secondary mb-4">
            Quick Links
          </h4>
          <Link to="#hero" className="text-white mb-2">
            Home
          </Link>
          <Link to="#about" className="text-white mb-2">
            About
          </Link>
          <Link to="#healthtips" className="text-white mb-2">
            Tips
          </Link>
          <Link to="#healthform" className="text-white mb-2">
            Form
          </Link>
          <Link to="#team" className="text-white mb-2">
            Team
          </Link>
          <Link to="#review" className="text-white mb-2">
            Reviews
          </Link>
          <Link to="#blog" className="text-white mb-2">
            Blog
          </Link>
        </div>

        <div className="flex flex-col w-full md:w-2/4 sm:w-5/6 px-4 md:px-0">
          <h4 className="text-white text-lg font-semibold border-b-4 border-secondary mb-4">
            Connect with Us
          </h4>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                className="bg-light border-2 rounded-3xl h-14 px-4"
                placeholder="Your Name"
              />
              <Input
                type="email"
                className="bg-light border-2 rounded-3xl h-14 px-4"
                placeholder="Your Email"
              />
            </div>
            <Input
              type="text"
              className="bg-light border-2 rounded-3xl h-14 px-4"
              placeholder="Subject"
            />
            <textarea
              className="form-textarea bg-light border-2 rounded-xl px-4 w-full sm:w-auto"
              rows={5} cols={70} 
              placeholder="Message"
            ></textarea>

            <Button className="w-full py-3 text-green-500 bg-white">
              Send Message
            </Button>
          </form>
          <Separator className="my-6" />
          <h6 className="text-white text-lg font-semibold mt-4 mb-3">
            Follow Us On Social Media
          </h6>
          <div className="flex gap-2">
            <Button variant="outline" className="btn-square">
              <Twitter className="h-5 w-5  text-green-500" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" className="btn-square">
              <Facebook className="h-5 w-5  text-green-500" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" className="btn-square">
              <Instagram className="h-5 w-5  text-green-500" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" className="btn-square">
              <Linkedin className="h-5 w-5  text-green-500" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white border-t border-secondary py-4 mt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-center md:text-left">
          <p className="mb-0">
            &copy;{" "}
            <a href="#" className="text-white">
              Food Dx Team
            </a>{" "}
            All Rights Reserved.
          </p>
          <p className="mb-0">
            Designed by{" "}
            <a href="#" className="text-white">
              Food Dx Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
