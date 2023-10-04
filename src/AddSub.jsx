import React from 'react';

export const AddSub = ({
  newSubCategory,
  setNewSubCategory,
  handleAddSubCategory,
}) => {
  return (
    <>
      <input
        type="text"
        value={newSubCategory}
        onChange={e => setNewSubCategory(e.target.value)}
        placeholder="New Sub-Category"
      />
      <button onClick={handleAddSubCategory}>Add</button>
    </>
  );
};
