"use client";
import Header from "@components/layout/Header";
import Container from "@components/layout/Container";
import { UserProvider } from "@/context/userContext";
import ThemeProvider from "@/context/changeTheme";

function RootElements({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <ThemeProvider>
        {/* hide scrollbar */}
        <div
          className="h-screen w-full bg-[#fef9f7] dark:bg-[#020617] relative overflow-y-scroll"
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Background container */}
          <div className="pointer-events-none fixed inset-0 z-0">
            {/* Light Mode Background */}
            <div
              className="absolute inset-0 dark:hidden block"
              style={{
                backgroundImage: `
  radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
  radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)`,
              }}
            />
            {/* Dark Mode Background */}
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
              }}
            />
          </div>

          {/* Main Content - should be above the backgrounds */}

          <div className="relative z-10 text-bt-primary dark:text-wt-primary">
            <Header />
            <Container>
              <div className="pt-20">{children}</div>
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default RootElements;
