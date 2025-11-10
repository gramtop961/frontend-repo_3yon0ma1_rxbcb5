import React from 'react';
import { Home, Bed, Users, Calendar, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex items-center gap-3 w-full px-4 py-2 rounded-md transition-colors ${
      active
        ? 'bg-blue-600 text-white'
        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 bg-slate-900 text-white px-4 py-6 border-r border-slate-800">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="h-8 w-8 rounded-md bg-blue-600 grid place-items-center font-bold">H</div>
        <div>
          <p className="text-sm leading-tight text-slate-300">Hostel</p>
          <p className="text-lg font-semibold leading-tight">Manager</p>
        </div>
      </div>

      <nav className="space-y-1">
        <NavItem icon={Home} label="Dashboard" active />
        <NavItem icon={Bed} label="Rooms" />
        <NavItem icon={Users} label="Guests" />
        <NavItem icon={Calendar} label="Bookings" />
        <NavItem icon={Settings} label="Settings" />
      </nav>

      <div className="mt-auto text-xs text-slate-400 px-2">
        <p>v1.0 • All systems normal</p>
      </div>
    </aside>
  );
};

export default Sidebar;
