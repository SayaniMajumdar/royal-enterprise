import React, { useState } from 'react';
import { Utensils, Leaf, Drumstick, Sparkles } from 'lucide-react';

const MENU_DATA = {
  starters: [
    { name: 'Kolkata Pure Bhetki Fish Fry', type: 'non-veg', cuisine: 'Bengali Heritage', description: 'Crumb-fried Kolkata Bhetki fillet marinated in fresh coriander-mint & served with pungent Kasundi mustard dip.' },
    { name: 'Crispy Mochar Chop', type: 'veg', cuisine: 'Bengali Traditional', description: 'Spiced banana blossom croquettes crumb-fried to a golden crunch with aromatic Bengali garam masala.' },
    { name: 'Zafrani Paneer Malai Tikka', type: 'veg', cuisine: 'Royal Awadhi', description: 'Charcoal-grilled artisanal cottage cheese steeped in hung curd, green cardamom, and Kashmiri saffron.' },
    { name: 'Galouti Kebab on Ulte Tawa Paratha', type: 'non-veg', cuisine: 'Awadhi Royalty', description: 'Melt-in-mouth smoked lamb patties infused with 32 secret spices served on saffron-drizzled parathas.' },
    { name: 'Tandoori Murgh Malai Tikka', type: 'non-veg', cuisine: 'Mughlai', description: 'Tender chicken thighs marinated in double cream, crushed white pepper, cheese, and charred in clay ovens.' },
    { name: 'Dahi Ke Kebab with Mint Coulis', type: 'veg', cuisine: 'North Indian', description: 'Velvety hung curd patties with a golden cardamom and coriander crust, served with spiced mint reduction.' },
    { name: 'Kolkata Phuchka & Papri Chaat Bar', type: 'veg', cuisine: 'Live Street Theatre', description: 'Crisp puris stuffed with spiced black gram & potato mash, served with 3 signature waters (Tamarind, Mint-Hing & Sweet Jeera).' },
    { name: 'Tandoori Fish Tikka', type: 'non-veg', cuisine: 'Tandoor Special', description: 'River fish chunks marinated in Ajwain (carom seeds), yellow chili, and mustard oil, roasted to smoky perfection.' },
  ],
  mains: [
    { name: 'Steamed Gobindobhog Basanti Pulao', type: 'veg', cuisine: 'Bengali Heritage', description: 'Aromatic short-grain Gobindobhog rice tempered in pure desi ghee, saffron, cashew nuts, and golden raisins.' },
    { name: 'Kolkata Bhetki Paturi', type: 'non-veg', cuisine: 'Bengali Masterpiece', description: 'Fresh Bhetki fillets marinated in yellow & black mustard paste with green chilies, wrapped and steamed in banana leaves.' },
    { name: 'Daab Chingri Royale', type: 'non-veg', cuisine: 'Coastal Bengal', description: 'Jumbo river prawns braised in tender coconut cream and mustard gravy, served inside whole green coconuts.' },
    { name: 'Signature Slow-Cooked Mutton Kosha', type: 'non-veg', cuisine: 'Bengali Specialty', description: 'Tender goat meat slow-simmered in dark caramelized onions, ginger paste, and fragrant spices for four hours.' },
    { name: 'Kolkata Dum Mutton Biryani', type: 'non-veg', cuisine: 'Kolkata Classic', description: 'Long-grain basmati layered with tender mutton, slow-cooked royal saffron stock, a whole spiced egg, and melt-in-mouth aloo.' },
    { name: 'Royal Chicken Chaap', type: 'non-veg', cuisine: 'Mughlai', description: 'Slow-braised chicken leg quarters in a velvety gravy of poppy seeds, cashew paste, mace, and rose essence.' },
    { name: 'Jodhpuri Dal Baati Churma', type: 'veg', cuisine: 'Rajasthani Royal', description: 'Crispy whole wheat dumplings baked over cow dung charcoal, immersed in hot panchmel dal and pure desi ghee.' },
    { name: 'Paneer Lababdar & Dal Bukhara', type: 'veg', cuisine: 'North Indian', description: 'Cottage cheese in rich tomato-onion glaze paired with whole black lentils slow-simmered overnight over charcoal.' },
  ],
  desserts: [
    { name: 'Traditional Baked Rosogolla', type: 'veg', cuisine: 'Bengal Confectionery', description: 'Spongy cottage cheese dumplings baked in a rich caramelized condensed milk rabri with cardamom notes.' },
    { name: 'Mishti Doi (in Traditional Clay Pots)', type: 'veg', cuisine: 'Heritage Bengal', description: 'Authentic fermented sweet curd set in porous terracotta pots with caramelized jaggery essence.' },
    { name: 'Nolen Gur Sandesh & Kesar Rasmalai', type: 'veg', cuisine: 'Artisanal Sweets', description: 'Winter date-palm jaggery chhana sandesh alongside soft cottage cheese patties steeped in saffron-pistachio milk.' },
    { name: 'Live Malpua with Rabri Theatre', type: 'veg', cuisine: 'Live Station', description: 'Crisp hot semolina and fennel pancakes dipped in sugar syrup and topped with chilled thickened malai rabri.' },
    { name: 'Warm Moong Dal Halwa with Gold Leaf', type: 'veg', cuisine: 'Royal Banquet', description: 'Slow-roasted split yellow gram halwa enriched with generous desi ghee, saffron, sliced almonds, and edible gold leaf.' },
    { name: 'Matka Kulfi with Rose Faluda', type: 'veg', cuisine: 'Traditional Chilled', description: 'Creamy slow-reduced clotted milk kulfi infused with pistachio and served with basil seeds, vermicelli, and rose syrup.' },
  ],
  beverages: [
    { name: 'Gondhoraj Lemonade & Aam Panna', type: 'veg', cuisine: 'Bengali Refreshment', description: 'Fragrant Kaffir-lime scented cooler paired with roasted raw-mango distillate spiced with black salt and roasted cumin.' },
    { name: 'Fresh Tender Coconut Water Bar', type: 'veg', cuisine: 'Natural Wellness', description: 'Fresh tender green coconuts cracked live with fresh mint sprigs, chia seeds, and citrus wedges.' },
    { name: 'Blue Lagoon Citrus Cooler', type: 'veg', cuisine: 'Modern Mocktail', description: 'Curacao-tinted bubbly lemonade infused with crushed fresh mint, kaffir lime leaves, and sparkling soda.' },
    { name: 'Live Turkish Sand Coffee & Masala Chai', type: 'veg', cuisine: 'Artisanal Brews', description: 'Finely ground single-origin coffee brewed in copper cezve over hot sand, alongside slow-simmered ginger-cardamom tea.' },
  ],
};

const CateringMenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'

  const categories = [
    { id: 'starters', label: 'Starters & Live Theatres' },
    { id: 'mains', label: 'Royal Main Courses' },
    { id: 'desserts', label: 'Artisanal Desserts & Sweets' },
    { id: 'beverages', label: 'Signature Coolers & Brews' },
  ];

  const currentCategoryItems = MENU_DATA[activeCategory] || [];
  const filteredItems = currentCategoryItems.filter((item) => {
    if (dietaryFilter === 'veg') return item.type === 'veg';
    if (dietaryFilter === 'non-veg') return item.type === 'non-veg';
    return true;
  });

  return (
    <div className="py-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-800/80 pb-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-[2px] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-b from-[#DEC692] via-[#C59B46] to-[#B38734] text-navy-950 font-bold shadow-sm'
                  : 'bg-navy-900/60 text-slate-300 hover:text-gold-300 border border-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dietary Toggle */}
        <div className="flex items-center space-x-1.5 bg-[#050811] p-1 rounded-[2px] border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setDietaryFilter('all')}
            className={`px-3 py-1.5 rounded-[2px] transition-colors font-medium text-[11px] tracking-wide ${
              dietaryFilter === 'all'
                ? 'bg-navy-950 text-gold-300 border border-gold-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Items
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('veg')}
            className={`px-3 py-1.5 rounded-[2px] transition-colors font-medium text-[11px] tracking-wide flex items-center space-x-1.5 ${
              dietaryFilter === 'veg'
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                : 'text-slate-400 hover:text-emerald-400'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Pure Veg</span>
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('non-veg')}
            className={`px-3 py-1.5 rounded-[2px] transition-colors font-medium text-[11px] tracking-wide flex items-center space-x-1.5 ${
              dietaryFilter === 'non-veg'
                ? 'bg-rose-950/80 text-rose-300 border border-rose-500/50'
                : 'text-slate-400 hover:text-rose-400'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span>Non-Veg</span>
          </button>
        </div>
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredItems.map((dish, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-[2px] bg-[#090E1B] border border-slate-800/80 hover:border-gold-500/35 transition-all duration-200 flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center space-x-2.5">
                  <span
                    className={`w-3.5 h-3.5 rounded-[2px] flex items-center justify-center border text-[8px] ${
                      dish.type === 'veg'
                        ? 'border-emerald-500/80 text-emerald-400 bg-emerald-500/10'
                        : 'border-rose-500/80 text-rose-400 bg-rose-500/10'
                    }`}
                    title={dish.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  >
                    ●
                  </span>
                  <h4 className="font-serif font-bold text-base text-slate-100 group-hover:text-gold-300 transition-colors tracking-wide">
                    {dish.name}
                  </h4>
                </div>
                <span className="text-[9.5px] uppercase tracking-[0.16em] font-semibold px-2 py-0.5 rounded-[2px] bg-navy-950 border border-slate-800 text-gold-400/90 shrink-0">
                  {dish.cuisine}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-light">
                {dish.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400 font-light">
              <span>{dish.type === 'veg' ? '100% Pure Vegetarian' : 'Fresh Poultry, Lamb or Seafood'}</span>
              <span className="text-gold-400/90 font-medium">Chef Recommended</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[#090E1B] border border-slate-800/80 rounded-[2px] text-center text-xs text-slate-300/90 font-light">
        <Sparkles className="w-3.5 h-3.5 text-gold-400 inline-block mr-1.5 -mt-0.5" />
        All menus are customizable. We provide dedicated pure vegetarian and Jain cooking kitchens with separate utensils, cold rooms, and service staff upon request.
      </div>
    </div>
  );
};

export default CateringMenuSection;
