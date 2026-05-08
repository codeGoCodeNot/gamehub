type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-y-4 items-center px-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
    </div>
  );
};

export default Heading;
