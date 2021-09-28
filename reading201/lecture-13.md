# Class: 13 - Local Storage and Data Persistence

topics

## Data Persistence

**Data Persistence** : allows data to be accessed even after a tab is closed.
*ex. - Amazon account: I log in and can look at all my previous orders, CC information, shipping address, etc*

## Local Storage

**Local Storage**: data on the Local Storage objet in key: value pairs

* `coffee: [drinks, drinks]`
* `localStorage.getItem(coffee)`

### built in methods

* `getItem((key)`
* `setItem(key, value)`
* `clear()`
* `removeItem(key)`

### [JSON](https://www.json.org/json-en.html)

### Retreiving and Storing Items

#### Get items from storage

1. localStorage.getItem('key')
1. check if it is null/valid
1. if it is valid, then JSON.parse(data)
1. perhaps reinstantiate each value

#### Set items in storage

1. decide what you want to store (value)
1. decide what you want to call it (key)
1. turn your
