import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FAF7F2] px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-14 h-14 rounded-full bg-white border border-[#E5DED3] flex items-center justify-center mx-auto text-[#6E1423] shadow-sm">
          <Utensils className="w-6 h-6" />
        </div>
        
        <span className="stamp-tag">404 • Missing Link</span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] tracking-tight">
          This page didn't show up. Unlike our caterers.
        </h1>

        <p className="text-sm text-[#524C44] leading-relaxed">
          The link you followed seems to have gone missing or was moved. Everything else is on schedule.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            to="/"
            className="btn-maroon px-6 py-2.5 text-xs font-semibold inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
