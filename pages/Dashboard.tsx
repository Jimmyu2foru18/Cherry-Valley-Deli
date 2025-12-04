import React, { useState, useEffect } from 'react';
import { Calendar, Users, LogOut, Clock, Plus, UserPlus, FileText, CheckCircle, XCircle, PlayCircle, StopCircle } from 'lucide-react';
import { Employee, Shift } from '../types';
import { MOCK_EMPLOYEES, MOCK_SHIFTS } from '../constants';

interface DashboardProps {
  isAdmin: boolean;
  onLogout: () => void;
}

type Tab = 'SCHEDULE' | 'TEAM' | 'REQUESTS' | 'TIMECLOCK';

interface Request {
  id: string;
  employeeName: string;
  type: string;
  dates: string;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'DENIED';
}

const Dashboard: React.FC<DashboardProps> = ({ isAdmin, onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>(isAdmin ? 'SCHEDULE' : 'TIMECLOCK');
  const [employees] = useState<Employee[]>(MOCK_EMPLOYEES);
  
  // Time Clock State
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState('00:00:00');

  // Requests State
  const [requests, setRequests] = useState<Request[]>([
    { id: '1', employeeName: 'Mike D.', type: 'Time Off', dates: 'Oct 25 - Oct 26', reason: 'Family wedding out of town.', status: 'PENDING' },
    { id: '2', employeeName: 'Sarah L.', type: 'Shift Swap', dates: 'Oct 28', reason: 'Asking to swap with Joe T.', status: 'PENDING' }
  ]);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Time Clock Logic
  useEffect(() => {
    let interval: number;
    if (isClockedIn && clockInTime) {
      interval = window.setInterval(() => {
        const now = new Date();
        const diff = now.getTime() - clockInTime.getTime();
        const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
        const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        setElapsedTime(`${hours}:${minutes}:${seconds}`);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isClockedIn, clockInTime]);

  const handleClockToggle = () => {
    if (isClockedIn) {
      setIsClockedIn(false);
      setClockInTime(null);
      setElapsedTime('00:00:00');
      // In real app, submit timesheet
    } else {
      setIsClockedIn(true);
      setClockInTime(new Date());
    }
  };

  const handleRequestAction = (id: string, status: 'APPROVED' | 'DENIED') => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status } : req));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex animate-fade-in-up">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-display font-bold tracking-wider cursor-pointer">CV<span className="text-cherry-600">ADMIN</span></h2>
          <p className="text-xs text-gray-400 mt-1">Internal Management System</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {!isAdmin && (
            <button 
              onClick={() => setActiveTab('TIMECLOCK')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'TIMECLOCK' ? 'bg-cherry-600 text-white font-bold' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <Clock size={20} /> Time Clock
            </button>
          )}

          <button 
            onClick={() => setActiveTab('SCHEDULE')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'SCHEDULE' ? 'bg-cherry-600 text-white font-bold' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Calendar size={20} /> Schedule Maker
          </button>
          
          <button 
            onClick={() => setActiveTab('TEAM')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'TEAM' ? 'bg-cherry-600 text-white font-bold' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Users size={20} /> Team Directory
          </button>

          {isAdmin && (
            <button 
              onClick={() => setActiveTab('REQUESTS')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'REQUESTS' ? 'bg-cherry-600 text-white font-bold' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <FileText size={20} /> Requests 
              {requests.filter(r => r.status === 'PENDING').length > 0 && (
                <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full ml-auto animate-pulse">
                  {requests.filter(r => r.status === 'PENDING').length}
                </span>
              )}
            </button>
          )}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">
              {isAdmin ? 'AD' : 'EM'}
            </div>
            <div>
              <p className="text-sm font-bold">{isAdmin ? 'Admin User' : 'Staff User'}</p>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>
          <button onClick={onLogout} className="w-full flex items-center gap-2 text-gray-400 hover:text-white px-2 py-2 text-sm">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {activeTab === 'SCHEDULE' && 'Weekly Schedule'}
              {activeTab === 'TEAM' && 'Team Directory'}
              {activeTab === 'REQUESTS' && 'Employee Requests'}
              {activeTab === 'TIMECLOCK' && 'My Time Clock'}
            </h1>
            <p className="text-slate-500">Welcome back, {isAdmin ? 'Manager' : 'Team Member'}.</p>
          </div>
          <div className="md:hidden">
             <button onClick={onLogout} className="text-red-600 font-bold">Logout</button>
          </div>
        </header>

        {/* Time Clock View (Staff) */}
        {activeTab === 'TIMECLOCK' && (
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden text-center p-12">
              <h2 className="text-gray-400 font-bold uppercase tracking-widest mb-2">Current Status</h2>
              <div className={`text-2xl font-bold mb-8 ${isClockedIn ? 'text-green-600' : 'text-gray-600'}`}>
                {isClockedIn ? 'CLOCKED IN' : 'CLOCKED OUT'}
              </div>

              <div className="font-mono text-6xl font-bold text-slate-900 mb-12 tabular-nums">
                {elapsedTime}
              </div>

              <button 
                onClick={handleClockToggle}
                className={`w-full py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] ${
                  isClockedIn 
                    ? 'bg-red-50 text-red-600 border-2 border-red-100 hover:bg-red-100' 
                    : 'bg-green-600 text-white shadow-xl shadow-green-600/30 hover:bg-green-700'
                }`}
              >
                {isClockedIn ? (
                  <>
                    <StopCircle size={32} /> Clock Out
                  </>
                ) : (
                  <>
                    <PlayCircle size={32} /> Clock In
                  </>
                )}
              </button>
              
              {isClockedIn && (
                <p className="mt-6 text-sm text-gray-400">
                  Started at: {clockInTime?.toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Schedule View */}
        {activeTab === 'SCHEDULE' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-slate-700">Current Week: Oct 23 - Oct 29</h3>
              {isAdmin && (
                <button className="bg-cherry-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-cherry-700">
                  <Plus size={16} /> Add Shift
                </button>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-slate-600 text-sm uppercase tracking-wider">
                    <th className="p-4 border-b font-medium">Employee</th>
                    {days.map(day => <th key={day} className="p-4 border-b font-medium">{day}</th>)}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {employees.map(emp => (
                    <tr key={emp.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-cherry-100 text-cherry-700 flex items-center justify-center text-xs">
                          {emp.name.charAt(0)}
                        </div>
                        {emp.name}
                        <span className="text-xs font-normal text-gray-400 ml-1">({emp.position})</span>
                      </td>
                      {days.map(day => {
                        const shift = MOCK_SHIFTS.find(s => s.employeeId === emp.id && s.day === day);
                        return (
                          <td key={day} className="p-4">
                            {shift ? (
                              <div className={`p-2 rounded-lg text-xs font-bold ${
                                shift.area === 'Kitchen' ? 'bg-orange-100 text-orange-800' : 
                                shift.area === 'Front' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                              }`}>
                                {shift.startTime} - {shift.endTime}
                                <div className="mt-1 opacity-75">{shift.area}</div>
                              </div>
                            ) : (
                              <span className="text-gray-300">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Team View */}
        {activeTab === 'TEAM' && (
          <div>
            {isAdmin && (
              <div className="mb-6 flex justify-end">
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                  <UserPlus size={18} /> Add Employee
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map(emp => (
                <div key={emp.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 hover:border-cherry-300 transition-all">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${
                    emp.role === 'OWNER' ? 'bg-purple-100 text-purple-700' :
                    emp.role === 'MANAGER' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {emp.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{emp.name}</h3>
                    <p className="text-cherry-600 font-medium text-sm">{emp.position}</p>
                    <p className="text-slate-400 text-xs mt-1">{emp.email}</p>
                    <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500">
                      {emp.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Requests View (Admin Only) */}
        {activeTab === 'REQUESTS' && isAdmin && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-lg mb-4">Manage Requests</h3>
            <div className="space-y-4">
               {requests.map(req => (
                 <div key={req.id} className={`flex justify-between items-center p-4 rounded-xl border transition-all ${
                   req.status === 'PENDING' ? 'bg-gray-50 border-gray-100' : 
                   req.status === 'APPROVED' ? 'bg-green-50 border-green-100 opacity-75' : 'bg-red-50 border-red-100 opacity-75'
                 }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold">{req.employeeName}</p>
                        {req.status !== 'PENDING' && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            req.status === 'APPROVED' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                          }`}>
                            {req.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{req.type} • {req.dates}</p>
                      <p className="text-xs text-gray-400 mt-1">"{req.reason}"</p>
                    </div>
                    {req.status === 'PENDING' && (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleRequestAction(req.id, 'APPROVED')}
                          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-bold flex items-center gap-1"
                        >
                          <CheckCircle size={14} /> Approve
                        </button>
                        <button 
                          onClick={() => handleRequestAction(req.id, 'DENIED')}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-bold flex items-center gap-1"
                        >
                          <XCircle size={14} /> Deny
                        </button>
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'REQUESTS' && !isAdmin && (
           <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Access Denied</h3>
              <p className="text-slate-500">You do not have permission to view this page.</p>
           </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;