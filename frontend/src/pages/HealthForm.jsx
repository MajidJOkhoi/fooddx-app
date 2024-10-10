import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HealthForm = () => {
  return (
    <section className="healthform flex items-center justify-center min-h-screen bg-gradient-to-r from-[#2D88C5] to-[#85BADD] py-20 p-6" id="healthform">
      <div className="container-fluid  ">
        <div className="container py-5">
          <div className="row gx-5">
    
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className=" text-4xl font-semibold border-b-4 border-secondary mb-4 text-white">TakeCare Health</h5>
                <h1 className=" text-4xl font-bold mb-6">Your Dedicated Health Partner Food Dx</h1>
                <p className=" mb-5 text-white">
                  Welcome to Your Dedicated Health Partner. Our innovative Food Dx app revolutionizes the way you approach your well-being by offering tailored solutions for your unique health needs.
                </p>
                {/* <Button variant="dark" className="rounded-3xl py-3 px-5 border-2 bg-orange-600 text-white font-bold">
                  AI Dr Bot
                </Button> */}
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-6">
              <Card className="bg-white text-center rounded-3xl shadow-lg p-6">
                <CardHeader>
                  <CardTitle className="text-2xl mb-6">User Health Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input type="text" className="bg-light border-2 rounded-3xl h-14 px-4" placeholder="Your Name" />
                      <Input type="number" className="bg-light border-2 rounded-3xl h-14 px-4" placeholder="Your Age" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Select Gender</Label>
                        <Select>
                          <SelectTrigger className="bg-light border-2 rounded-3xl h-14 px-4">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Select Disease</Label>
                        <Select>
                          <SelectTrigger className="bg-light border-2 rounded-3xl h-14 px-4">
                            <SelectValue placeholder="Select Disease" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high_blood_pressure">High Blood Pressure</SelectItem>
                            <SelectItem value="diabetes">Diabetes Mellitus</SelectItem>
                            <SelectItem value="allergies">Allergies</SelectItem>
                            <SelectItem value="anxiety">Anxiety Disorders</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Input type="text" className="bg-light border-2 rounded-3xl h-14 px-4" placeholder="Current Medication" />

                    <Textarea className="bg-light border-2 rounded-xl px-4" rows={5}  placeholder="Enter your medical history" />

                    <Button className=" rounded-3xl py-3 px-5 border-2 bg-white text-green-500 font-bold">Make A Prediction</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthForm;
