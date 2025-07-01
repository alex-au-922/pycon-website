"use client";
export default function ToC() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-8">
      <div className="text-center text-gray-200 text-sm font-semibold">
        &copy; {currentYear} PyCon Hong Kong. All rights reserved.
      </div>
    </div>
  );
}
