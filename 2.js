//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(list) {
    let tempArr = [];
    for (i in list){
        if (typeof(list[i]) === 'number') {
            tempArr.push(list[i]);
        }
    }
    return tempArr;
  }
