import React from 'react';
import ResumeUploadForm from '@/components/ResumeUploadForm';

export default function StandaloneResumePage() {
  return (
    <main className="w-full bg-white min-h-[60vh] flex flex-col justify-center">
      <ResumeUploadForm />
    </main>
  );
}
