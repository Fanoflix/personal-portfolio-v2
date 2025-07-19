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
    <nav className="flex gap-2 mb-8 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            cat === currentCategory
              ? "bg-primary text-primary-foreground shadow"
              : "bg-muted text-muted-foreground hover:bg-accent",
          )}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
