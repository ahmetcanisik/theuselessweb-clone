import UselessEntry from "@/components/UselessEntry";
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
      <div className="flex h-dvh justify-between flex-col items-center">
        <UselessEntry />
        <Footer />
      </div>
  );
}