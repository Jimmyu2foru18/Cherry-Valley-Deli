import React, { useState } from 'react';
import { Briefcase, CheckCircle, Upload } from 'lucide-react';
import { JOB_POSTINGS } from '../constants';

const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 animate-fade-in-up">
      {/* Hero */}
      <div className="bg-dark-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">JOIN OUR TEAM</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Become part of the Cherry Valley family. We offer competitive pay, flexible schedules, and a fast-paced environment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Open Positions List */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Briefcase className="text-cherry-600" /> Open Positions
            </h2>
            <div className="space-y-6">
              {JOB_POSTINGS.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-cherry-200 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                    <span className="bg-cherry-100 text-cherry-700 text-xs font-bold px-3 py-1 rounded-full">{job.type}</span>
                  </div>
                  <p className="text-green-600 font-bold mb-3">{job.salary}</p>
                  <p className="text-slate-600 text-sm mb-4">{job.description}</p>
                  <button onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth'})} className="text-cherry-600 font-bold text-sm hover:underline">
                    Apply Now &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="application-form">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 sticky top-24">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                  <p className="text-slate-500">Thanks for your interest. We will review your application and get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-cherry-600 font-bold hover:underline">Submit another application</button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Apply Now</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                        <input required type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cherry-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                        <input required type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cherry-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                      <input required type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Position Applying For</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cherry-500">
                        {JOB_POSTINGS.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Resume / CV</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                        <Upload className="mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Why do you want to join us?</label>
                      <textarea rows={3} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cherry-500"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-cherry-600 hover:bg-cherry-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-cherry-600/20">
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;