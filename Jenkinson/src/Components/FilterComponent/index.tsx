import React from 'react';
import styles from './FilterComponent.module.css';

interface FilterComponentProps {
  currentCategory: string;
  handleFilterClick: (category: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ currentCategory, handleFilterClick }) => {
  return (
    <div className={`${styles.recomend_filters} my-3 d-flex gap-3 justify-content-center flex-wrap`}>
      <FilterButton
        category="Shark"
        currentCategory={currentCategory}
        onClick={() => handleFilterClick('Shark')}
      >
        Shark
      </FilterButton>
      <FilterButton
        category="Dolphin"
        currentCategory={currentCategory}
        onClick={() => handleFilterClick('Dolphin')}
      >
        Dolphin
      </FilterButton>
      <FilterButton
        category="Turtle"
        currentCategory={currentCategory}
        onClick={() => handleFilterClick('Turtle')}
      >
        Whales
      </FilterButton>
      <FilterButton
        category="Best"
        currentCategory={currentCategory}
        onClick={() => handleFilterClick('Best')}
      >
        More
      </FilterButton>
    </div>
  );
};

interface FilterButtonProps {
  category: string;
  currentCategory: string;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, currentCategory, onClick, children }) => {
  return (
    <span
      className={`${styles.border} border py-1 px-4 ${currentCategory === category ? `${styles.current}` : ''}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default FilterComponent;
