const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="font-bold text-3xl md:text-[40px] leading-snug lg:max-w-[20ch] mx-auto">
      {title}
    </h2>
  );
};

export default Heading;
