import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#060A13] px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-14 h-14 rounded-[2px] bg-[#090E1B] border border-gold-400/40 flex items-center justify-center mx-auto text-gold-400 shadow-md">
          <Crown className="w-7 h-7" />
        </div>
        <h1 className="font-serif text-6xl font-bold text-gold-300 tracking-tight">
          404
        </h1>
        <h2 className="font-serif text-2xl font-bold text-slate-100 tracking-wide">
          Page Not Found
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
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
