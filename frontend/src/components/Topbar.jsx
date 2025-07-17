// src/components/Topbar.jsx
export default function Topbar() {
    return (
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 p-4 flex justify-between items-center shadow">
        <h2 className="text-lg font-medium">Hi, Reader 👋</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search books..."
            className="rounded px-3 py-1 border border-gray-300 text-sm"
          />
          <img src="/assets/user.png" alt="Avatar" className="w-8 h-8 rounded-full" />
        </div>
      </header>
    );
  }
  