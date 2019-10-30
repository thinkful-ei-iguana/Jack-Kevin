import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
  console.log(items.find(item => item.id === id));
  return items.find(item => item.id === id);
}

function addItem(name) {
    try{
        item.validateName(name);
        let newItem = item.create(name);
        this.items.push(newItem);
    }catch { console.log(`cannot add item ${error.message}`);}
}

function findAndToggleChecked(id) {
    this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        item.findById(id).name = newName;
    }catch { console.log(`Cannot update name: ${error.message}`);
    }
}

function findAndDelete(id) {
   let deleteItem = this.findById(id);
   this.items = this.items.filter(item => item != deleteItem);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
};