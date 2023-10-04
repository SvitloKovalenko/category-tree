import {useState} from 'react';
import {AddSub} from './AddSub';

const Category = ({category, setCategories}) => {
  const [newSubCategory, setNewSubCategory] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleAddSubCategory = e => {
    if (newSubCategory.trim() !== '') {
      setCategories(prevCategories => {
        return prevCategories.map(cat =>
          cat.id === category.id
            ? {...cat, subCategories: [...cat.subCategories, newSubCategory]}
            : cat,
        );
      });
      setNewSubCategory('');
    }
  };

  const handleEditSubCategory = (index, newName) => {
    setCategories(prevCategories => {
      return prevCategories.map(cat =>
        cat.id === category.id
          ? {
              ...cat,
              subCategories: cat.subCategories.map((subCat, i) =>
                i === index ? newName : subCat,
              ),
            }
          : cat,
      );
    });
  };

  const handleDeleteSubCategory = index => {
    setCategories(prevCategories => {
      return prevCategories.map(cat =>
        cat.id === category.id
          ? {
              ...cat,
              subCategories: cat.subCategories.filter((_, i) => i !== index),
            }
          : cat,
      );
    });
  };
  const handleEditCategory = (id, newName) => {
    setCategories(prevCategories => {
      return prevCategories.map(category =>
        category.id === id ? {...category, name: newName} : category,
      );
    });
  };

  const handleDeleteCategory = id => {
    setCategories(prevCategories => {
      return prevCategories.filter(category => category.id !== id);
    });
  };
  return (
    <ul className="subcategory">
      {category.subCategories.map((subCat, index) => (
        <li className="subcategory" key={index}>
          <h2>{subCat}</h2>
          <div className="btn_wrapper">
            {' '}
            <button
              onClick={() =>
                handleEditSubCategory(
                  index,
                  prompt('Edit your category:', subCat),
                )
              }
            >
              Edit
            </button>
            <button onClick={() => handleDeleteSubCategory(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
      <h2>{category.name}</h2>
      <div className="btn_wrapper">
        {showInput ? (
          <AddSub
            newSubCategory={newSubCategory}
            setNewSubCategory={setNewSubCategory}
            handleAddSubCategory={handleAddSubCategory}
          />
        ) : (
          <button onClick={() => setShowInput(true)}>Add</button>
        )}
        <button
          onClick={() =>
            handleEditCategory(
              category.id,
              prompt('Edit your category:', category.name),
            )
          }
        >
          Edit
        </button>
        <button onClick={() => handleDeleteCategory(category.id)}>
          Delete
        </button>
      </div>
    </ul>
  );
};

export default Category;
