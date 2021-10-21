import React, { useState } from 'react';
import { Arrows } from '../Svgs';
import './drop-down.scss';

const DropDown = (props) => {
    const { items = [], initialLabel = "All Items", itemSelectHandler } = props;
    const [isOpen, setOpen] = useState(false);
    const [dropdownList] = useState(items);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const itemClickHandler = (id) => {
      if (selectedItem !== id) {
        setSelectedItem(id);
        toggleDropdown();
      }

      itemSelectHandler(id);
      
    }
    
    return (
      <div className='dropdown'>
        <div className='dropdown__header' onClick={toggleDropdown}>
          <small className="text-uppercase">{selectedItem ? dropdownList.find(item => item.id === selectedItem).label : initialLabel}</small>
          <Arrows />
        </div>
        <div className={`dropdown__body ${isOpen && 'dropdown__body--open'}`}>
          {dropdownList.map(item => (
            <div className={`dropdown__item ${item.id === selectedItem && 'dropdown__item--selected'}`} 
                  onClick={e => itemClickHandler(e.target.id)} id={item.id}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    )
};

export default DropDown;