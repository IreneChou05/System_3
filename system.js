var options = {
  valueNames: [ 'id', 'num', 'name', 'door', 'place', 'phone', 'bank', 'salary' ]
};

// Init list
var contactList = new List('contacts', options);

var idField = $('#id-field'),
    numField=$('#num-field'),
    nameField = $('#name-field'),
    doorField = $('#door-field'),
    placeField = $('#place-field'),
    phoneField=$('#phone-field'),
    bankField=$('#bank-field'),
    salaryField=$('#salary-field'),
    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    newBtn = $('#new-btn'),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  contactList.add({
    id: Math.floor(Math.random()*110000),
    num:numField.val(),
    name: nameField.val(),
    door: doorField.val(),
    place: placeField.val(),
    phone: phoneField.val(),
    bank: bankField.val(),
    salary: salaryField.val()
  });
  clearFields();
  refreshCallbacks();
  document.getElementById('new').style.display = 'none';
  
});

editBtn.click(function() {
  var item = contactList.get('id', idField.val())[0];
  item.values({
    id:idField.val(),
    num:numField.val(),
    name:nameField.val(),
    door:doorField.val(),
    place:placeField.val(),
    phone:phoneField.val(),
    bank:bankField.val(),
    salary:salaryField.val()
  });
  clearFields();
  editBtn.hide();
  addBtn.show();
  document.getElementById('new').style.display = 'none';
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);
  editBtns = $(editBtns.selector);
  
  removeBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    contactList.remove('id', itemId);
  });
  
  editBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    var itemValues = contactList.get('id', itemId)[0].values();
    idField.val(itemValues.id);
    numField.val(itemValues.num);
    nameField.val(itemValues.name);
    doorField.val(itemValues.door);
    placeField.val(itemValues.place);
    phoneField.val(itemValues.phone);
    bankField.val(itemValues.bank);
    salaryField.val(itemValues.salary);
    editBtn.show();
    addBtn.hide();
  document.getElementById('new').style.display = 'block';
  });
  
}

function clearFields() {
  numField.val('');
  nameField.val('');
  doorField.val('');
  placeField.val('');
  phoneField.val('');
  bankField.val('');
  salaryField.val('');
}

newBtn.click(function() {
  var newAdd = document.getElementById('new').style; 
  newAdd.display = 'block';
});

