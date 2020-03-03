class SortedList {
  constructor() {
    this.items = []
    this.length=0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(!this.items[pos]){
            throw new Error('OutOfBounds')
          }
          return this.items[pos]
        }
  

  max()  {
        if(this.items.length ===0){
          throw new Error('EmptySortedList')
        }
        return this.items[this.items.length-1]
      }

  min() {
    if(this.items.length ===0){
      throw new Error('EmptySortedList')
    }
    return this.items[0]
  }

  sum() {
    let sum = this.items.reduce(function(acc, curr){
      return acc + curr
    }, 0)
    return sum
  }

  avg() {
        if(this.items.length ===0){
          throw new Error('EmptySortedList')
        }
        let sum = this.items.reduce(function(acc, curr){
          return acc + curr
        }, 0)
        return sum/this.items.length
      }
    }

module.exports = SortedList;













