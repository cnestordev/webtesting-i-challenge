const enhancer = require('./enhancer.js');
// test away!

describe('test that values are being incremented and decremented accordingly', () => {
    describe('item is repaired', () => {
        it('return durability value of 100', () => {
            const item = {
                name: 'sword',
                durability: 55,
                enhancement: 15
            }
            expect(enhancer.repair(item)).toEqual({ ...item, durability: 100 })
        })

    })

    describe('enhacement succeeds', () => {
        it('should increment enhancement by 1 if value is not 20', () => {
            const item = {
                name: 'shield',
                durability: 78,
                enhancement: 17
            }

            const expected = {
                ...item,
                enhancement: item.enhancement + 1
            }

            const failItem = {
                ...item,
                enhancement: 20
            }

            const failExpected = {
                ...failItem,
                enhancement: failItem.enhancement + 1
            }

            expect(enhancer.success(item)).toEqual(expected)
            expect(enhancer.success(failItem)).not.toEqual(failExpected)
        })
    })

    describe('enhancement failure', () => {
        it('should decrement durability by 5 if enhancement is less than 15', () => {
            const item = {
                name: 'wand',
                durability: 40,
                enhancement: 14
            }

            const expected = {
                ...item,
                durability: item.durability - 5
            }

            const item2 = {
                ...item,
                enhancement: 15
            }

            const expected2 = {
                ...item2,
                durability: item2.durability - 10
            }

            const item3 = {
                ...item,
                enhancement: 16,
                durability: 30
            }

            const expected3 = {
                ...item,
                durability: item3.durability - 10,
                enhancement: item3.enhancement - 1
            }

            expect(enhancer.fail(item)).toEqual(expected)
            expect(enhancer.fail(item2)).toEqual(expected2)
            expect(enhancer.fail(item3)).toEqual(expected3)
        })

        it('should decrement durability by 10 if enhancement is greater than or equal to 15', () => {
            const item = {
                name: 'armor',
                durability: 91,
                enhancement: 15
            }

            const updatedItem = {
                ...item,
                durability: item.durability - 10
            }

            const otherVal = {
                ...item,
                durability: item.durability - 10,
                enhancement: item.enhancement - 1
            }

            expect(enhancer.fail(item)).toEqual(updatedItem)
            expect(enhancer.fail(item)).not.toEqual(otherVal)
        })

        it('should decrement enhancement 1 and decrement durability by 10 if enhancement is greater than 16', () => {
            const item = {
                name: 'dagger',
                durability: 50,
                enhancement: 20
            }

            // const failItem = {
            //     name: 
            // }

            const updatedItem = {
                ...item,
                enhancement: item.enhancement - 1,
                durability: item.durability - 10
            }

            const otherVal = {
                ...item,
                durability: item.durability - 10
            }

            expect(enhancer.fail(item)).toEqual(updatedItem)
            expect(enhancer.fail(item)).not.toEqual(otherVal)
        })
    })
})


