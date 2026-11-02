import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-navy-950 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mx-auto text-gold-400 shadow-gold-glow">
          <Crown className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-6xl font-extrabold text-gold-gradient">
          404
        </h1>
        <h2 className="font-serif text-2xl font-bold text-slate-100">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          The requested grand suite or page cannot be located. Allow us to escort you back to our main salon.
        </p>
        <div>
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
