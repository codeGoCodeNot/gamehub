import { LucideThumbsUp, LucideMeh, LucideTarget } from "lucide-react";

type EmojiProps = {
  rating_top: number;
};

const Emoji = ({ rating_top }: EmojiProps) => {
  if (rating_top < 3) return null;

  if (rating_top < 4)
    return <LucideMeh className="w-5 h-5 inline-block ml-2 text-gray-400" />;
  if (rating_top < 5)
    return (
      <LucideThumbsUp className="w-5 h-5 inline-block ml-2 text-green-500" />
    );
  return <LucideTarget className="w-5 h-5 inline-block ml-2 text-yellow-500" />;
};

export default Emoji;
