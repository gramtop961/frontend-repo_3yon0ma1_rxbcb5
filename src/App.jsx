import React from 'react';
import Sidebar from './components/Sidebar';
import StatsCards from './components/StatsCards';
import OccupancyChart from './components/OccupancyChart';
import RecentBookings from './components/RecentBookings';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Hostel Management Dashboard</h1>
          <p className="text-sm text-slate-500">Overview of occupancy, bookings, and revenue</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search rooms, guests..."
            className="hidden md:block bg-white border border-slate-300 rounded-md px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="https://i.pravatar.cc/40?img=32"
            alt="avatar"
            className="h-9 w-9 rounded-full ring-2 ring-white shadow"
          />
        </div>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            <StatsCards />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <OccupancyChart />
              </div>
              <div className="xl:col-span-1">
                <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3">Announcements</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="p-3 rounded-lg bg-blue-50 border border-blue-100">Planned maintenance on 3rd floor this weekend.</li>
                    <li className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">Early check-in policy updated. Review guidelines.</li>
                    <li className="p-3 rounded-lg bg-amber-50 border border-amber-100">Front desk shifts updated for next week.</li>
                  </ul>
                </div>
              </div>
            </div>
            <RecentBookings />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
