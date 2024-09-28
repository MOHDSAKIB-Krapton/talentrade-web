import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { features } from "./constant";
import "../../styles.css";

function Features() {
  const heading = "Unlock Endless Opportunities to Share and Gain Knowledge";

  const description =
    "Join our vibrant TalentTrade community where learning and teaching go hand in hand. " +
    "Whether you’re a seasoned expert or a curious learner, our platform empowers you to share " +
    "your unique skills while discovering new talents. Through interactive sessions, personalized " +
    "learning paths, and an intuitive skill exchange system, we foster an environment where growth " +
    "and learning are mutual. Earn coins by teaching, then use them to unlock new skills, ensuring " +
    "a fulfilling, collaborative experience for all. Embrace the future of skill-sharing today!";

  return (
    <section className="w-full py-16 bg-gray-50 text-center border border-gray-200">
      <div className=" max-w-7xl mx-auto px-4 space-y-20">
        <div className="w-full lg:w-[80%]">
          <h2 className={`heading text-start`}>
            Unlock Endless Opportunities to Share and <br />{" "}
            <span className="highlight">Gain Knowledge</span>
          </h2>
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
                <Typography
                  variant="subtitle2"
                  className="text-gray-600 text-sm"
                  style={{ fontsize: "2.875rem" }}
                >
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
