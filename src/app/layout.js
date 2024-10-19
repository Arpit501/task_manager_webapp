import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Task Management App",
  description: "Manage your tasks effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300 ` }>
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4 text-white">
          <h1 className="text-lg font-bold">Task Manager</h1>
        </nav>
        
        {/* Main content */}
        <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 text-white text-center">
          <p>&copy; 2024 Task Management App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
