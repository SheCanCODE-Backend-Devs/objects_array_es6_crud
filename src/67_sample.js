// Sample object for demonstration
const sampleObject = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
    },
    isActive: true
  };
  
  // Print all properties of an object
  function printProperties(obj) {
    for (let prop in obj) {
      console.log(prop);
    }
  }
  
  // Print all values of an object
  function printValues(obj) {
    for (let prop in obj) {
      console.log(obj[prop]);
    }
  }
  
  // Search for a specific key in an object
  function searchForKey(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : 'Key not found';
  }
  
  // Modify object values based on certain conditions
  function modifyObject(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === 'number') {
        obj[prop] *= 2;
      }
    }
    return obj;
  }
  
  // Filter out key-value pairs based on a condition
  function filterObject(obj, condition) {
    const filteredObj = {};
    for (let prop in obj) {
      if (condition(obj[prop])) {
        filteredObj[prop] = obj[prop];
      }
    }
    return filteredObj;
  }
  
  // Combine two objects into a single object
  function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  // Calculate and print the number of key-value pairs in an object
  function objectSize(obj) {
    return Object.keys(obj).length;
  }
  
  // Access and print values from a nested object
  function accessNestedObject(obj, keys) {
    let nestedValue = obj;
    for (let key of keys) {
      if (nestedValue.hasOwnProperty(key)) {
        nestedValue = nestedValue[key];
      } else {
        return 'Key not found';
      }
    }
    return nestedValue;
  }
  
  // Sort object keys
  function sortObjectKeys(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
    for (let key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
    return sortedObj;
  }
  
  // Testing the functions
  console.log('All properties:');
  printProperties(sampleObject);
  
  console.log('\nAll values:');
  printValues(sampleObject);
  
  console.log('\nSearch for key "age":', searchForKey(sampleObject, 'age'));
  
  console.log('\nModified object:', modifyObject(sampleObject));
  
  console.log('\nFiltered object:', filterObject(sampleObject, value => typeof value === 'string'));
  
  const secondObject = { height: 180, weight: 75 };
  console.log('\nMerged objects:', mergeObjects(sampleObject, secondObject));
  
  console.log('\nObject size:', objectSize(sampleObject));
  
  console.log('\nAccess nested object:', accessNestedObject(sampleObject, ['address', 'city']));
  
  console.log('\nSorted object keys:', sortObjectKeys(sampleObject));
  