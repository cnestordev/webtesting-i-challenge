const enhancer = require('./enhancer.js');
// test away!

describe('should values of video game items change accordingly', () => {
    it('return durability value of 100', () => {
        const item = {
            name: 'sword',
            durability: 55,
            enhancement: 15
        }
        expect(enhancer.repair(item)).toEqual({ ...item, durability: 100 })
    })

    it('should increment enhancement by 1 only if value is less than 20', () => {
        const item = {
            name: 'shield',
            durability: 78,
            enhancement: 17
        }

        const updatedItem = {
            ...item,
            enhancement: item.enhancement + 1
        }

        const otherVal = {
            ...item,
            durability: item.durability + 1,
            enhancement: item.enhancement + 1
        }

        expect(enhancer.success(item)).toEqual(updatedItem)
        expect(enhancer.success(item)).not.toEqual(otherVal)
    })

    it('should not increment enhancement if at 20', () => {
        const item = {
            name: 'Axe',
            durability: 63,
            enhancement: 20
        }

        expect(enhancer.success(item)).toEqual(item)
    })
})


