import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F6F3EE] px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-14 h-14 rounded-full bg-[#FFFDF9] border border-[#E8E1D5] flex items-center justify-center mx-auto text-gold-dark shadow-sm">
          <Crown className="w-6 h-6 stroke-[1.5]" />
        </div>
        <h1 className="font-serif text-6xl font-light text-maroon tracking-tight">
          404
        </h1>
        <h2 className="font-serif text-2xl font-normal text-[#141414] tracking-wide">
          Page Not Found
        </h2>
        <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed font-light">
          The requested grand suite or page cannot be located. Allow us to escort you back to our main salon.
        </p>
        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;