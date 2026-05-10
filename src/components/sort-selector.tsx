import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useGameQuery from "@/state-management/hooks/use-game-query";
import type { SortOrder } from "@/types/query";
import { LucideArrowDown } from "lucide-react";

type SortOption = {
  value: SortOrder;
  label: string;
};

const SortSelector = () => {
  const { gameQuery, setSortOrder } = useGameQuery();

  const sortOrders: SortOption[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-released", label: "Release date" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedLabel =
    sortOrders.find((order) => order.value === gameQuery.sortOrder)?.label ||
    "Relevance";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Order By: {selectedLabel}
          <LucideArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {sortOrders.map((order) => (
            <DropdownMenuItem
              key={order.value}
              onClick={() => setSortOrder(order.value)}
            >
              {order.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortSelector;
