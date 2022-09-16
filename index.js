import newLinkedList from "./newLinkedList.js"

const myLinkedList = newLinkedList()

// headboi -> 1 -> 2 -> 3
myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.prepend("headboi")
console.log(myLinkedList.toString())
myLinkedList.removeAt(3)
console.log(myLinkedList.toString())
console.log(myLinkedList.head())
console.log(myLinkedList.tail())