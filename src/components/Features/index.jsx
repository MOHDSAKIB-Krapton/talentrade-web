import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {features , heading , description} from './constant';
import { CheckCircle } from '@mui/icons-material';


function Features() {
  return (
    <section className="w-full py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold poppins-extrabold text-gray-800">{heading}</h2>
          <p className="mt-4 text-lg poppins-medium text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} style={{ transition: 'transform 0.3s ease-in-out' }} className="shadow-lg rounded-lg transition-transform duration-700 ease-in-out transform hover:scale-105 ">
              <CardContent>
                <div className="flex justify-center mb-4">
                 <img src={feature.icon} alt="icon gif" className='w-24'/> 
                </div>
                <Typography variant="h6" className="text-xl font-bold mb-2 poppins-semibold">{feature.title}</Typography>
                <Typography variant="body2" className="text-gray-600">{feature.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features