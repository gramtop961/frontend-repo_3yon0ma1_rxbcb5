import React from 'react';
import { CalendarPlus, User, BedDouble } from 'lucide-react';

const sample = [
  { id: 'BKG-1024', guest: 'Alice Johnson', room: 'Deluxe 204', date: '2025-11-12', nights: 3 },
  { id: 'BKG-1025', guest: 'Rahul Mehta', room: 'Standard 118', date: '2025-11-13', nights: 1 },
  { id: 'BKG-1026', guest: 'Sara Lee', room: 'Suite 305', date: '2025-11-13', nights: 2 },
  { id: 'BKG-1027', guest: 'Miguel Diaz', room: 'Standard 122', date: '2025-11-14', nights: 4 },
];

const Row = ({ item }) => (
  <tr className="border-b last:border-0 border-slate-200">
    <td className="py-3 px-2 text-slate-700 text-sm">{item.id}</td>
    <td className="py-3 px-2 text-slate-700 text-sm flex items-center gap-2"><User size={14} className="text-slate-400" />{item.guest}</td>
    <td className="py-3 px-2 text-slate-700 text-sm flex items-center gap-2"><BedDouble size={14} className="text-slate-400" />{item.room}</td>
    <td className="py-3 px-2 text-slate-700 text-sm flex items-center gap-2"><CalendarPlus size={14} className="text-slate-400" />{item.date}</td>
    <td className="py-3 px-2 text-slate-700 text-sm">{item.nights} night{item.nights > 1 ? 's' : ''}</td>
    <td className="py-3 px-2 text-right">
      <button className="text-xs px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800">View</button>
    </td>
  </tr>
);

const RecentBookings = () => {
  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-900">Recent Bookings</h3>
        <button className="text-sm px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50">See all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-xs text-slate-500 border-b border-slate-200">
              <th className="py-2 px-2 font-medium">ID</th>
              <th className="py-2 px-2 font-medium">Guest</th>
              <th className="py-2 px-2 font-medium">Room</th>
              <th className="py-2 px-2 font-medium">Check-in</th>
              <th className="py-2 px-2 font-medium">Nights</th>
              <th className="py-2 px-2" />
            </tr>
          </thead>
          <tbody>
            {sample.map((item) => (
              <Row key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;
