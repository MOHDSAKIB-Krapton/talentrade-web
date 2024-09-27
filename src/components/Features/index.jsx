import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { features, heading, description } from "./constant";
import "../../styles.css";

function Features() {
  return (
    <section className="w-full py-16 bg-gray-50 text-center border border-gray-200">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className={`heading text-start`}>{heading}</h2>
          <p className="subheading text-start">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <Card
              key={index}
              style={{ transition: "transform 0.3s ease-in-out" }}
              className="shadow-md hover:shadow-md cursor-pointer rounded-lg transition-transform duration-500 ease-in transform hover:scale-[1.03] border border-gray-200"
            >
              <CardContent>
                <div className="flex justify-center mb-4">
                  <img src={feature.icon} alt="icon gif" className="w-24" />
                </div>
                <Typography
                  variant="h6"
                  className="text-xl font-bold mb-2 poppins-semibold"
                >
                  {feature.title}
                </Typography>
                <Typography variant="subtitle2" className="text-gray-600">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
