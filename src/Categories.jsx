import {useState} from 'react';
import Category from './Category';

const Categories = () => {
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([
        ...categories,
        {id: categories.length + 1, name: newCategory, subCategories: []},
      ]);
      setNewCategory('');
    }
  };

  return (
    <div className="container">
      <div className="category">
        <input
          type="text"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
          placeholder="New Category"
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
      {categories.map(category => (
        <>
          <Category
            key={category.id}
            category={category}
            setCategories={setCategories}
          />
        </>
      ))}
    </div>
  );
};

export default Categories;
