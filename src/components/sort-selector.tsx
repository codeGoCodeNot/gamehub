import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { SortOrder } from "@/types/query";
import { LucideArrowDown } from "lucide-react";

type SortSelectorProps = {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedSortOrder: SortOrder;
};

type SortOption = {
  value: SortOrder;
  label: string;
};

const SortSelector = ({
  onSelectSortOrder,
  selectedSortOrder,
}: SortSelectorProps) => {
  const sortOrders: SortOption[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-released", label: "Release date" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedLabel =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
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
              onClick={() => onSelectSortOrder(order.value)}
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
