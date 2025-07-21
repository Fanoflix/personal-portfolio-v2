import { Button } from "@/src/components/Button";
import { cn } from "@/src/lib/utils";

interface CategoryNavProps {
  categories: string[];
  currentCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryNav({
  categories,
  currentCategory,
  onSelect,
}: CategoryNavProps) {
  return (
    <nav className="flex gap-2 overflow-x-auto w-full max-w-xs md:max-w-[500px]">
      {categories.map((category) => (
        <Button
          key={category}
          className={cn(
            "h-max py-0.5 px-1 rounded-md text-sm font-medium transition-colors duration-300 border-0",
            category === currentCategory
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground hover:bg-accent hover:text-primary",
          )}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </nav>
  );
}
