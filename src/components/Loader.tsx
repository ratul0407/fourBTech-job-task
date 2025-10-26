import { Spinner } from "@/components/ui/spinner";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner className="size-10 md:size-12 lg:size-14 text-btn-primary" />
    </div>
  );
};

export default Loader;
