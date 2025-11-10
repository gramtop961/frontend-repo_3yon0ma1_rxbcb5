import React from 'react';
import { Bed, Users, CalendarCheck2, DollarSign } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, trend }) => {
  const isUp = trend && trend.startsWith('+');
  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
      <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <p className="text-xs text-slate-500">{label}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-semibold text-slate-900">{value}</p>
          {trend && (
            <span className={`text-xs ${isUp ? 'text-emerald-600' : 'text-rose-600'}`}>{trend}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const StatsCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Stat icon={Bed} label="Occupied Rooms" value="42 / 56" trend="+4 today" />
      <Stat icon={Users} label="Active Guests" value="78" trend="+6 this week" />
      <Stat icon={CalendarCheck2} label="Upcoming Check-ins" value="12" trend="-2 vs. yesterday" />
      <Stat icon={DollarSign} label="Revenue (MTD)" value="$24,580" trend="+12%" />
    </section>
  );
};

export default StatsCards;
