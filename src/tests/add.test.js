const add = (a, b) => a+b;
const generateGreeting = (name) =>`Hello ${name}`

test('should add two numbers', ()=>{
    const result = add(4, 3);
    expect(result).toBe(7);

    const name = generateGreeting('Jay');
    expect(name).toBe('Hello Jay');
})