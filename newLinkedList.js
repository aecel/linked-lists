import newNode from "./newNode.js"

const newLinkedList = () => {
  let headNode
  let tailNode

  // Adds a new node containing value to the end of the list
  const append = (value) => {
    const node = newNode({ value: value })
    if (!headNode) {
      headNode = node
      tailNode = node
      return
    }

    let someNode = headNode
    while (someNode.nextNode != null) {
      someNode = someNode.nextNode
    }
    someNode.nextNode = node
    tailNode = node
  }

  // Adds a new node containing value to the start of the list
  const prepend = (value) => {
    const node = newNode({ value: value })
    if (!headNode) {
      headNode = node
      tailNode = node
      return
    }

    node.nextNode = headNode
    headNode = node
  }

  // Returns the total number of nodes in the list
  const size = () => {
    if (!headNode) return 0
    let counter = 1
    let someNode = headNode
    while (someNode.nextNode != null) {
      counter++
      someNode = someNode.nextNode
    }
    return counter
  }

  // Returns the first node in the list
  const head = () => {
    return headNode
  }

  // Returns the last node in the list
  const tail = () => {
    return tailNode
  }

  // Returns the node at the given index
  const at = (index) => {
    if (!headNode) return null
    if (index == 0) return headNode
    let counter = 1
    let someNode = headNode
    while (someNode.nextNode != null) {
      if (counter == index) return someNode.nextNode
      someNode = someNode.nextNode
      counter++
    }
    return null
  }

  // Removes the last element from the list
  const pop = () => {
    let size
    if (!headNode) size = 0
    size = 1
    let someNode = headNode
    while (someNode.nextNode.nextNode != null) {
      size++
      someNode = someNode.nextNode
    }
    someNode.nextNode = null
    tailNode = someNode
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  const contains = (value) => {
    let someNode = headNode
    while (someNode.nextNode != null) {
      if (someNode.value == value) return true
      someNode = someNode.nextNode
    }
    if (someNode.value == value) return true
    return false
  }

  // Returns the index of the node containing value, or null if not found
  const find = (value) => {
    let counter = 0
    let someNode = headNode
    while (someNode.nextNode != null) {
      if (someNode.value == value) return counter
      someNode = someNode.nextNode
      counter++
    }
    if (someNode.value == value) return counter
    return null
  }

  // Represents your LinkedList objects as strings, so you can print them out
  // and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let someNode = headNode
    let string = ""
    while (someNode.nextNode != null) {
      string += someNode.value + " -> "
      someNode = someNode.nextNode
    }
    string += someNode.value + " -> null"
    return string
  }

  // Extra credit:
  // Extra Credit Tip: When you insert or remove a node,
  // consider how it will affect the existing nodes.
  // Some of the nodes will need their nextNode link updated.

  // Inserts a new node with the provided value at the given index
  const insertAt = (value, index) => {
    const node = newNode({ value: value })
    if (index == 0) {
      node.nextNode = headNode
      headNode = node
      return
    }
    let counter = 1
    let someNode = headNode
    while (someNode.nextNode != null) {
      if (counter == index) {
        node.nextNode = someNode.nextNode
        someNode.nextNode = node
        return
      }
      someNode = someNode.nextNode
      counter++
    }
    if (counter == index) {
      someNode.nextNode = node
      tailNode = node
      return
    }
    return
  }

  // Removes the node at the given index
  const removeAt = (index) => {
    if (index == 0) {
      headNode = headNode.nextNode
      return
    }
    let counter = 1
    let someNode = headNode
    while (someNode.nextNode.nextNode != null) {
      if (counter == index) {
        someNode.nextNode = someNode.nextNode.nextNode
        return
      }
      someNode = someNode.nextNode
      counter++
    }
    if (counter == index) {
      someNode.nextNode = null
      tailNode = someNode
      return
    }
    return
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  }
}

export default newLinkedList
