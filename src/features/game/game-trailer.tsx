import useTrailer from "./hooks/use-trailer";

type GameTrailerProps = {
  id: number | undefined;
};

const GameTrailer = ({ id }: GameTrailerProps) => {
  if (!id) return null;

  const { data, isLoading, error } = useTrailer(id);

  if (isLoading) return null;
  if (error) return <p>Error loading trailer: {error.message}</p>;

  return (
    <div>
      {data?.map((trailer) => (
        <div key={trailer.id} className="mb-4">
          <video src={trailer.data.max} poster={trailer.preview} controls />
        </div>
      ))}
    </div>
  );
};

export default GameTrailer;
