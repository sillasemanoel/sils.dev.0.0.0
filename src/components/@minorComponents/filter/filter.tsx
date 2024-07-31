import { CategoryFilterStyle } from "./style";

type Category = "all" | "bestProjects" | "practicalTests" | "others";

type CategoryFilterProps = {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <CategoryFilterStyle>
      <p
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => onCategoryChange("all")}
      >
        All
      </p>
      <p
        className={selectedCategory === "bestProjects" ? "active" : ""}
        onClick={() => onCategoryChange("bestProjects")}
      >
        Best Projects
      </p>
      <p
        className={selectedCategory === "practicalTests" ? "active" : ""}
        onClick={() => onCategoryChange("practicalTests")}
      >
        Practical tests
      </p>
      <p
        className={selectedCategory === "others" ? "active" : ""}
        onClick={() => onCategoryChange("others")}
      >
        Others
      </p>
    </CategoryFilterStyle>
  );
}
